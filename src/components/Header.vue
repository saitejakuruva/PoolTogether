<template>
  <vs-row class="outer-container" vs-type="flex" vs-justify="space-between">
    <vs-col class="header-item">
      <img height="50" :src="require('@/assets/logos/pool-together--white-logo@2x.png')"/>
    </vs-col>
    <vs-col class="header-item" vs-type="flex" vs-justify="flex-end" vs-align="center">
      <vs-button v-if="!web3Address" class="connect-wallet-btn" @click="login" color="#95389e" text-color="#ffffff" type="border">CONNECT FORTMATIC WALLET</vs-button>
      <div class="account-icon" v-else><span class="tooltip-text">{{web3Address}}</span>{{web3Address.slice(0,6)}}...{{web3Address.slice(-4)}}<vs-button v-if="web3Address" class="logout-btn" @click="logout" color="#95389e" text-color="#ffffff" type="border">LOGOUT</vs-button></div>
    </vs-col>
  </vs-row>
</template>
<script>
// import {onboard} from "@/utils/onboard.js"
import {web3, logout} from "@/utils/fortmatic-web3.js"
import {mapState} from "vuex";
export default {
  methods: {
    async login() {
      var accounts = await web3.eth.getAccounts();
      if (accounts && Array.isArray(accounts) && accounts[0])
        this.$store.dispatch("setWeb3Address", accounts[0]);
    },
    logout() {
      logout();
      this.$store.dispatch("setWeb3Address", "");
    }
  },
  computed: {
    ...mapState({
      web3Address: 'web3Address'
    }),
    isWeb3Connected() {
      return (this.web3Address != "" || this.web3Address != null)
    }
  },
  created() {

  }
}
</script>
<style scoped>
  
  .account-icon .tooltip-text {
    visibility: hidden;
    position: relative;
    top: 30px;
    left: 120px;
    width: fit-content;
    background: black;
    color: #ffffff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;    
  }
  .account-icon:hover .tooltip-text {
    visibility: visible;
  }
  .account-icon {
    color: white;
  }
  .header-item {
    width: fit-content !important;
    padding: 10px 20px;
  }
  .connect-wallet-btn {
    background: #311457 !important;
    color: white;
  }
  .logout-btn {
    padding: 5px;
    margin-left: 20px;
  }
  .outer-container {
    background: #311457;
    background-image: linear-gradient(
      180deg,
      #311066 30%,
      #311457 45%,
      #311457 100%
    );
  }

  @media only screen and (max-width: 768px) {
    .account-icon .tooltip-text {
      display: none; 
    }
  }
</style>