import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import { HardhatUserConfig } from "hardhat/config";

const accounts =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.4" },
      { version: "0.8.9" },
      { version: "0.8.11" },
      { version: "0.8.15" },
    ],
  },
  networks: {
    hardhat: {
      blockGasLimit: 100000000000,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/95f65ab099894076814e8526f52c9149",
      accounts,
    },
    ethereum: {
      url: "https://mainnet.infura.io/v3/dc46117c927b4b168ff1dc06b30a4c2f",
      accounts,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
