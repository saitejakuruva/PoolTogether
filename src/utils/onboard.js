import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import {fortmaticAPIKey} from "@/config/settings.js"
let web3;

export const onboard = Onboard({
  dappId: "dff4dce4-a615-443c-a908-2b174b28b4a8",       // [String] The API key created by step one above
  networkId: 4,  // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: wallet => {
       web3 = new Web3(wallet.provider)
    }
  },
  walletSelect: {
    wallets: [
      {
        walletName: "fortmatic",
        apiKey: fortmaticAPIKey,
        preferred: true
      }
    ]
  }
});

console.log(onboard);
console.log(web3);
