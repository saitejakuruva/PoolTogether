<template>
  <div class="steps-container">

    <!-- HEADING SECTION -->
    <h4 class="home-text">Join PoolTogether !</h4>
    <!-- END -->

    <!-- SUBTITLE SECTION -->
    <div class="subtitle-text"><strong>A no-loss, audited savings game powered by blockchain technology</strong></div>
    <!-- END -->
    
    <!-- QUESTION -->
    <h6 class="question">
      What is Pool Together?
    </h6>
    <!-- END -->

    <!-- DESCRIPTION -->
    <div class="description">
      PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a “savings ticket”. Each Savings Ticket gives you a chance to win a prize, but even if you don’t win, you keep all your money!* PoolTogether lets you have the best of both worlds -- saving money and the chance to win a prize!
    </div>
    <!-- END -->

    <!-- CTA  -->
    <div class="cta-group">
      <!-- <div> -->
        <!-- <vs-input color="primary" class="inputx" placeholder="Enter the pool value" v-model="value1"></vs-input> -->
      <!-- </div> -->
      <vs-button class="button-text cta-button" color="#79d70f" @click="submit" type="border">JOIN THE POOL</vs-button>
    </div>
    <!-- END -->
  </div>
</template>

<script>
// import { onSubmit } from "@/utils/joinThePool.js";
// const { Contract, providers} = require('ethers');
// import { abi as ierc20Abi } from '@/abis/IERC20.json';

// const provider = new providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();

// const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';
// const poolAddress = '0x29fe7D60DdF151E5b52e5FAB4f1325da6b2bD958';

export default {
  data() {
    return {
      value1: ""
    }
  },
  methods: {
    submit() {
      window.location = "https://app.pooltogether.com";
    }
  },
  async mounted() {

    // const dai = new Contract(daiAddress, ierc20Abi, signer);
    // const tx = await dai.approve(poolAddress, '10000000000000000000000000000');
    // console.log(tx);
  },

}
</script>
<style lang="scss" scoped>
  .inputx {
    border: solid 1px #79D70F;
    border-radius: 10px;
  }
  .home-text {
    color: white;
    font-weight: 900;
    font-size: 36px;
    text-transform: uppercase;
  }
  .steps-container {
    width: 60%;
    color: white;
    background: #311457;
    height: fit-content;
    padding: 30px;
    border-radius: 50px;
  }
  .subtitle-text {
    font-size: 16px;
  }
  .question {
    font-size: 28px;
    margin-top: 36px;
  }
  .description {
    font-size: 20px;
    text-align: left;
    font-family: sans-serif;
    padding: 25px 50px;
    line-height: 40px;
  }
  .cta-button {
    border-radius: 30px;
  }
  .button-text {
    font-size: 20px;
    font-weight: 900;
    padding: 10px 20px;
  }
  .cta-group {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .home-text {
      color: white;
      font-weight: 600;
      font-size: 24px;
      text-transform: uppercase;
    }
    .description {
      padding: 10px 15px;
    }
  }
</style>

<style lang="scss">
  .input-span-placeholder {
    color: white;
  }
</style>