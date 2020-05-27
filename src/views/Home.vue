<template>
  <div class="home">
      <div class="cards">
        <steps class="left-card"></steps>
        <div class="right-card">
          <img class="image-study" src="../assets/canva/drawkit-developer-woman-colour.svg"/>
        </div>
      </div>
      <div class="bottom-card">
        <div class="bottom-card-left">
          <h2 class="bottom-card-heading">How to join PoolTogether?</h2>
          <ul class="item-list">
            <li class="items">
              <div class="text-left main-text"><strong>Buy crypto using on ramp</strong></div>
              <div class="text-left sub-text">If you’ve decide then you’re only few clicks away to enter the pool. You can purchase tokens of respective pool using on ramp.</div>
            </li>
            <li class="items">
              <div class="text-left main-text"><strong>Already got some crypto?</strong></div>
              <div class="text-left sub-text">Aw! nice if you’re already have crypto then you can directly transfer your crypto of respective pool and start earning.</div>
            </li>
            <li class="items">
              <div class="text-left main-text"><strong>Do you have crypto that pool together don’t accept?</strong></div>
              <div class="text-left sub-text">No problem we got you covered you can check out Uniswap exchange or KyberSwap to swap your crypto.</div>
            </li>
          </ul>
        </div>
        <div class="bottom-card-right">
          <iframe width="100%" height="345" src="https://www.youtube.com/embed/oJtewzf4sf8?autoplay=1"></iframe>
          <div class="deposit-with-ramp-btn">
            <vs-button class="deposit-btn" color="#311457" v-if="web3Address" @click="depositWithRamp" type="border">BUY CRYPTO ASSETS</vs-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Steps from "@/components/Steps.vue";

export default {
  name: 'Home',
  methods: {
    depositWithRamp() {
      this.$store.dispatch("showModalWithOptions", {
        name: "deposit-modal",
        data: {
          
        }
      })
    }
  },
  computed: {
    web3Address() {
      return this.$store.state.web3Address;
    }
  },
  components: {
    Steps
  }
}
</script>
<style scoped>
  .image-study {
    width: 500px;
  }
  .deposit-btn {
    border-radius: 30px;
    font-size: 16px;
    font-weight: 900;
    border: 5px solid #311457;
    padding: 10px 30px;
  }
  .bottom-card-heading {
    font-size: 32px;
  }
  .bottom-card {
    color: #311457;
    background: white;
    display: flex;
    width: 90%;
    margin: 150px auto;
    border-radius: 25px;
    padding: 20px 10px;
  }
  .main-text {
    font-weight: 900;
    font-size: 20px;
  }
  .item-list {
    width: 80%;
    margin-top: 10px;
  }
  .bottom-card-left {
    width: 50%;
    margin-top: 50px;
  }
  .bottom-card-right {
    width: 50%;
    margin-top: 50px;
  }
  .text-left {
    text-align: left;
  }
  .items {
    list-style: none;
    padding: 10px;
  }
  .home {
    background:rgb(21, 32, 43);
    height: 100%;
    vertical-align: center;
    text-align: center;
  }
  .cards {
    width: 100%;
    margin-top: 150px;
    display: flex;
  }
  .left-card {
    width: 45%;
    display: inline-block;
    margin-left: 5%;
  }
  .right-card {
    width: 50%;
    display: inline-block;
  }
  .sub-text {
    padding: 5px 0;
  }
  @media only screen and (max-width: 768px) {
    .left-card {
      width: 90%;
      margin: auto;
    }
    .right-card {
      width: 90%;
    }
    .cards {
      display: block;
    }
    .bottom-card-left, .bottom-card-right {
      width: 80%;
      display: block;
      margin: auto;
    }
    .bottom-card {
      display: block;
    }
    .image-study {
      width: 100%;
    }
  }
  .deposit-with-ramp-btn {
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 30px;
  }
  .steps-card {
    background: gray;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>