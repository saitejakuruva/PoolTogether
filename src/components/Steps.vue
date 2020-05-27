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
      PoolTogether is an Ethereum based application that makes saving money as fun as a game. You join a pool by getting a “savings ticket”. Each Savings Ticket gives you a chance to win a prize, but even if you don’t win, you keep all your money!* PoolTogether lets you have the best of both worlds -- saving money and the chance to win a prize!    </div>
    <!-- END -->

    <!-- CTA  -->
    <vs-button class="button-text cta-button" color="#79d70f" type="border">CONNECT FORTMATIC WALLET</vs-button>
    <!-- END -->
  </div>
</template>

<style lang="scss" scoped>
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
    padding: 10px;
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