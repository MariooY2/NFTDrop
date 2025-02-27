import { viem } from "hardhat";

const contractAddress: string = `0x8932ae7ca4c9ad1ff53dcab7175d2bb450ffd283`;
const contractName = "NFT";

async function main() {
  const publicClient = await viem.getPublicClient();
  const [deployer] = await viem.getWalletClients();

  const Contract = await viem.getContractAt(
    contractName as string,
    contractAddress as `0x${string}`,
    { client: { wallet: deployer } }
  );

  const Withdrawtx = await Contract.write.withdraw();
  await publicClient.waitForTransactionReceipt({ hash: Withdrawtx });
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
