import { expect } from "chai";
import { viem } from "hardhat";
import { parseEther } from "viem";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

const TEST_PRICE = parseEther("0.1"); // 0.1 ETH
const MAX_SUPPLY = 5n;
const MAX_PER_WALLET = 2n;

async function deployContract() {
  const publicClient = await viem.getPublicClient();
  const [deployer, user1, user2, user3, attacker] =
    await viem.getWalletClients();

  // Deploy the NFT contract
  const nft = await viem.deployContract("NFT");

  return { nft, publicClient, deployer, user1, user2, user3, attacker };
}

describe("Crypto Cat NFT", async () => {
  describe("When the NFT contract is deployed", async () => {
    it("initializes with correct name and symbol", async () => {
      const { nft } = await loadFixture(deployContract);

      expect(await nft.read.name()).to.equal("Crypto Cat");
      expect(await nft.read.symbol()).to.equal("CAT");
    });

    it("initializes with correct token URI base", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      // Mint a token first to test tokenURI
      const mintTx = await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      const tokenId = 0n;
      const expectedURI =
        "https://bafybeihufv2xsgjxc7x6zu4raluamfom5k5s3hvkp2rshx5c6tbgy2656u.ipfs.w3s.link/0.json";
      expect(await nft.read.tokenURI([tokenId])).to.equal(expectedURI);
    });

    it("initializes with zero minted tokens", async () => {
      const { nft } = await loadFixture(deployContract);

      expect(await nft.read.totalMinted()).to.equal(0n);
    });

    it("sets correct constants", async () => {
      const { nft } = await loadFixture(deployContract);

      expect(await nft.read.MAX_SUPPLY()).to.equal(MAX_SUPPLY);
      expect(await nft.read.PRICE()).to.equal(TEST_PRICE);
      expect(await nft.read.MAX_PER_WALLET()).to.equal(MAX_PER_WALLET);
    });
  });

  describe("When a user mints an NFT", async () => {
    it("charges the correct amount of ETH", async () => {
      const { nft, publicClient, user1 } = await loadFixture(deployContract);

      const ethBalanceBefore = await publicClient.getBalance({
        address: user1.account.address,
      });

      const mintTx = await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      const txReceipt = await publicClient.waitForTransactionReceipt({
        hash: mintTx,
      });

      const gasUsed = txReceipt.cumulativeGasUsed;
      const gasPrice = txReceipt.effectiveGasPrice;
      const gasCost = gasUsed * gasPrice;

      const ethBalanceAfter = await publicClient.getBalance({
        address: user1.account.address,
      });

      const expectedBalanceAfter = ethBalanceBefore - TEST_PRICE - gasCost;
      expect(ethBalanceAfter).to.eq(expectedBalanceAfter);
    });

    it("increments the total minted count", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      const totalBefore = await nft.read.totalMinted();

      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      const totalAfter = await nft.read.totalMinted();
      expect(totalAfter).to.equal(totalBefore + 1n);
    });

    it("increments the user's minted per wallet count", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      const mintedBefore = await nft.read.mintedPerWallet([
        user1.account.address,
      ]);

      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      const mintedAfter = await nft.read.mintedPerWallet([
        user1.account.address,
      ]);
      expect(mintedAfter).to.equal(mintedBefore + 1n);
    });

    it("assigns the correct token to the buyer", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      const tokenId = 0n;
      const owner = await nft.read.ownerOf([tokenId]);
      expect(owner.toLocaleUpperCase()).to.equal(
        user1.account.address.toLocaleUpperCase()
      );
    });

    it("emits the NFTMinted event with correct parameters", async () => {
      const { nft, publicClient, user1 } = await loadFixture(deployContract);

      const mintTx = await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      const txReceipt = await publicClient.waitForTransactionReceipt({
        hash: mintTx,
      });

      const logs = await publicClient.getContractEvents({
        address: nft.address,
        abi: nft.abi,
        eventName: "NFTMinted",
        fromBlock: txReceipt.blockNumber,
        toBlock: txReceipt.blockNumber,
      });

      expect(logs.length).to.equal(1);
      expect(logs[0].args.minter?.toLocaleUpperCase()).to.equal(
        user1.account.address.toLocaleUpperCase()
      );
      expect(logs[0].args.tokenId).to.equal(0n);
    });
  });

  describe("Enforcing minting rules", async () => {
    it("rejects if price is incorrect", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      const incorrectPrice = parseEther("0.05");

      await expect(
        nft.write.safeMint([user1.account.address], {
          value: incorrectPrice,
          account: user1.account,
        })
      ).to.be.rejectedWith("Incorrect ETH amount");
    });

    it("rejects if max supply is reached", async () => {
      const { nft, user1, user2, user3 } = await loadFixture(deployContract);

      // Mint all available tokens
      for (let i = 0; i < Number(MAX_SUPPLY); i++) {
        const account = i % 2 === 0 ? user1.account : user2.account;
        await nft.write.safeMint([account.address], {
          value: TEST_PRICE,
          account,
        });
      }

      // Try to mint one more
      await expect(
        nft.write.safeMint([user3.account.address], {
          value: TEST_PRICE,
          account: user3.account,
        })
      ).to.be.rejectedWith("Max supply reached");
    });

    it("rejects if max per wallet is reached", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      // Mint the maximum allowed per wallet
      for (let i = 0; i < Number(MAX_PER_WALLET); i++) {
        await nft.write.safeMint([user1.account.address], {
          value: TEST_PRICE,
          account: user1.account,
        });
      }

      // Try to mint one more
      await expect(
        nft.write.safeMint([user1.account.address], {
          value: TEST_PRICE,
          account: user1.account,
        })
      ).to.be.rejectedWith("Max NFTs per wallet reached");
    });

    it("rejects if a contract tries to mint", async () => {
      const { nft, deployer } = await loadFixture(deployContract);

      // Deploy an attacker contract that attempts to mint
      const attackerContract = await viem.deployContract("NFTAttacker", [
        nft.address,
      ]);

      // Try to mint from the attacker contract
      await expect(
        attackerContract.write.attemptMint({
          value: TEST_PRICE,
          account: deployer.account,
        })
      ).to.be.rejectedWith("Contracts cannot mint");
    });
  });

  describe("TokenURI functionality", async () => {
    it("returns the correct token URI for existing tokens", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      // Mint a few tokens
      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      // Check URIs
      expect(await nft.read.tokenURI([0n])).to.equal(
        "https://bafybeihufv2xsgjxc7x6zu4raluamfom5k5s3hvkp2rshx5c6tbgy2656u.ipfs.w3s.link/0.json"
      );

      expect(await nft.read.tokenURI([1n])).to.equal(
        "https://bafybeihufv2xsgjxc7x6zu4raluamfom5k5s3hvkp2rshx5c6tbgy2656u.ipfs.w3s.link/1.json"
      );
    });

    it("rejects tokenURI requests for non-existent tokens", async () => {
      const { nft } = await loadFixture(deployContract);

      await expect(nft.read.tokenURI([999n])).to.be.rejectedWith(
        "Token does not exist"
      );
    });
  });

  describe("When owner withdraws funds", async () => {
    it("allows the owner to withdraw all funds", async () => {
      const { nft, publicClient, deployer, user1, user2 } = await loadFixture(
        deployContract
      );

      // Mint a few NFTs to add funds to contract
      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      await nft.write.safeMint([user2.account.address], {
        value: TEST_PRICE,
        account: user2.account,
      });

      const expectedBalance = TEST_PRICE * 2n;
      const contractBalance = await publicClient.getBalance({
        address: nft.address,
      });
      expect(contractBalance).to.equal(expectedBalance);

      const ownerBalanceBefore = await publicClient.getBalance({
        address: deployer.account.address,
      });

      const withdrawTx = await nft.write.withdraw({
        account: deployer.account,
      });

      const txReceipt = await publicClient.waitForTransactionReceipt({
        hash: withdrawTx,
      });

      const gasUsed = txReceipt.cumulativeGasUsed;
      const gasPrice = txReceipt.effectiveGasPrice;
      const gasCost = gasUsed * gasPrice;

      const ownerBalanceAfter = await publicClient.getBalance({
        address: deployer.account.address,
      });

      const contractBalanceAfter = await publicClient.getBalance({
        address: nft.address,
      });

      expect(contractBalanceAfter).to.equal(0n);
      expect(ownerBalanceAfter).to.equal(
        ownerBalanceBefore + expectedBalance - gasCost
      );
    });

    it("emits the FundsWithdrawn event with correct parameters", async () => {
      const { nft, publicClient, deployer, user1 } = await loadFixture(
        deployContract
      );

      // Mint an NFT to add funds to contract
      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      const expectedAmount = TEST_PRICE;

      const withdrawTx = await nft.write.withdraw({
        account: deployer.account,
      });

      const txReceipt = await publicClient.waitForTransactionReceipt({
        hash: withdrawTx,
      });

      const logs = await publicClient.getContractEvents({
        address: nft.address,
        abi: nft.abi,
        eventName: "FundsWithdrawn",
        fromBlock: txReceipt.blockNumber,
        toBlock: txReceipt.blockNumber,
      });

      expect(logs.length).to.equal(1);
      expect(logs[0].args.owner).to.equal(deployer.account.address);
      expect(logs[0].args.amount).to.equal(expectedAmount);
    });

    it("prevents non-owners from withdrawing", async () => {
      const { nft, user1 } = await loadFixture(deployContract);

      // Mint an NFT to add funds to contract
      await nft.write.safeMint([user1.account.address], {
        value: TEST_PRICE,
        account: user1.account,
      });

      await expect(
        nft.write.withdraw({
          account: user1.account,
        })
      ).to.be.rejectedWith("Ownable: caller is not the owner");
    });

    it("reverts when there are no funds to withdraw", async () => {
      const { nft, deployer } = await loadFixture(deployContract);

      await expect(
        nft.write.withdraw({
          account: deployer.account,
        })
      ).to.be.rejectedWith("No funds to withdraw");
    });
  });
});
