<template>
  <div class="home">
    <span class="home-text">
      Your best chance to win a lottery
      <div class="deposit-with-ramp-btn">
        <vs-button color="#311457" @click="depositWithRamp">DEPOSIT WITH RAMP</vs-button>
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
  }
</style>