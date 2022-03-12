const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    dev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },

    rinkeby: {
      provider: () => new HDWalletProvider(
        process.env.ADMIN_WALLET_PRIVATEKEY,
        process.env.RINKEBY_URL
      ),
      network_id: 4, // Rinkeby's network ID
      gas: 5500000, // Rinkeby has a lower block limit that main net
      confirmations: 2, // number of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200, // time of blocks before a deployment times out (minimum / default: 50)
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets)
    },

    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.ADMIN_WALLET_PRIVATEKEY,
        process.env.ROPSTEN_URL
      ),
      network_id: 3,
      gas: 4000000,
      confirmation: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    moonbase: {
      provider: () => new HDWalletProvider(
        process.env.ADMIN_WALLET_PRIVATEKEY,
        process.env.MOONBASE_PRIVATE_URL,
      ),
      network_id: 1287,
      gas: 12995000
    },

    mocha: {

    },

    compilers: {
      solc: {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        }
      }
    },

    plugins: [
      'truffle-plugin-verify',
      'solidity-coverage'
    ],

    api_keys: {
      etherscan: process.env.ETHERSCAN_API_KEY
    }
  }
};
