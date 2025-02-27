import { viem } from "hardhat";
async function main() {
  const NFTContract = await viem.deployContract("NFT");
  console.log(`Token contract deployed at ${NFTContract.address}\n`);
}
main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
