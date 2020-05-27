const { Contract, providers, utils } = require('ethers');
import { abi as poolTogetherAbi } from "../abis/abi.json";

const provider = new providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const address = "0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958";

const contract = new Contract(address, poolTogetherAbi, signer);

export async function onSubmit(value) {
  try {
    let response = await contract.deposit(
      parseFloat(value) * 10 ** 18,
      {
        gasLimit: utils.bigNumberify(7000000)
      }
    );
    console.log("Response: ", response);
  } catch (err) {
    console.log("error: ", err);
  }  
}