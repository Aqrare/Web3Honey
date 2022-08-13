import { ethers } from "hardhat";

async function main() {
  const Web3Honey = await ethers.getContractFactory("Web3Honey");
  const web3Honey = await Web3Honey.deploy({
    gasPrice: 100000000000,
  });
  console.log("Deploying...: ", web3Honey.address);
  await web3Honey.deployed();
  console.log("Contract was deployed to :", web3Honey.address);
}

console.log("start");
main();
