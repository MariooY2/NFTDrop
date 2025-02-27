import { viem } from "hardhat";
import { parseEther } from "viem";

const contractAddress: string = `0x8932ae7ca4c9ad1ff53dcab7175d2bb450ffd283`;
const contractName = "NFT";
const VALUE = parseEther("0.1");

async function main() {
  const publicClient = await viem.getPublicClient();
  const [deployer] = await viem.getWalletClients();

  const Contract = await viem.getContractAt(
    contractName as string,
    contractAddress as `0x${string}`,
    { client: { wallet: deployer } }
  );

  const MintNFTtx = await Contract.write.safeMint([deployer.account.address], {
    value: VALUE,
  });
  await publicClient.waitForTransactionReceipt({ hash: MintNFTtx });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
