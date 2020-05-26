<template>
  <div class="home">
    <span class="home-text">
      Your best chance to win a lottery
      <div class="subtitle">

      </div>
      <div class="deposit-with-ramp-btn">
        <vs-button color="#311457" v-if="web3Address" @click="depositWithRamp">DEPOSIT WITH RAMP</vs-button>
      </div>
      <div class="steps-card">
        Steps
      </div>
    </span>
  </div>
</template>

<script>
// @ is an alias to /src
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
  }
}
</script>
<style scoped>
  .home {
    background:rgb(21, 32, 43);
    height: 90vh;
    vertical-align: center;
    text-align: center;
  }
  .home-text {
    color: white;
    font-weight: 500;
    font-size: 64px;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
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