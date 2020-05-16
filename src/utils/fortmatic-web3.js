import {fortmaticAPIKey} from "@/config/settings.js"
const Fortmatic = require('fortmatic');
const Web3 = require('web3')
let fm = new Fortmatic(fortmaticAPIKey);
export var web3 = new Web3(fm.getProvider());
console.log(web3);

export function logout() {
  if (fm) {
    fm.user.logout();
  }
}