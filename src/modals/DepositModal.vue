<template>
  <v-dialog class="dialog-box" v-model="depositModal" :width="width" light>
    <div class="outer-container">
      <div @click="(isCurrencyConfirmed)?isCurrencyConfirmed = false: depositModal = false;" class="back-btn">
        BACK
      </div>
      <div class="ramp-logo-wrapper">
        <img src="https://www.ramp.network/assets/images/Ramp-logo.a70bdb13cd50edf66e03faa96ae03839.svg"/>
      </div>
      <div class="buy-text">I want to buy ...</div>
      <div v-if="!isCurrencyConfirmed" class="choose-token">
        <div @click="selectedCurrencyShortName = 'ETH'" :class="{'eth-selected': selectedCurrencyShortName == 'ETH', 'eth': selectedCurrencyShortName != 'ETH'}">
          <div style="display: flex; justify-content: flex-start;">
            <img height="20" weight="20" src="https://s3.ap-south-1.amazonaws.com/nuo-public/nuo_web/images/eth.png"/>
            <span class="eth-label">ETH</span>
          </div>
        </div>
        <div @click="selectedCurrencyShortName = 'DAI'" :class="{'eth-selected': selectedCurrencyShortName == 'DAI', 'eth': selectedCurrencyShortName != 'DAI'}">
          <div style="display: flex; justify-content: flex-start;">
            <img height="20" weight="20" src="https://s3.ap-south-1.amazonaws.com/nuo-public/nuo_web/images/dai.png"/>
            <span class="dai-label">DAI</span>
          </div>
        </div>
        <div @click="selectedCurrencyShortName = 'USDC'" :class="{'eth-selected': selectedCurrencyShortName == 'USDC', 'eth': selectedCurrencyShortName != 'USDC'}">
          <div style="display: flex; justify-content: flex-start;">
            <img height="20" weight="20" src="https://s3.ap-south-1.amazonaws.com/nuo-public/nuo_web/images/usdc.png"/>
            <span class="usdc-label">USDC</span>
          </div>
        </div>
      </div>
      <div v-else>
      <div class="input-label">Amount ({{selectedCurrencyShortName}})</div>
      <vs-input size="large" color="#ffffff" class="fiat-input" v-model="dollarValue"></vs-input>
      </div>
      <div v-if="!isCurrencyConfirmed" class="next-btn">
        <vs-button v-if="selectedCurrencyShortName != ''" @click="next" color="success" type="border">NEXT</vs-button>
        <vs-button v-else class="next-btn-disabled" disabled color="success" type="border">NEXT</vs-button>
      </div>
      <div v-else class="next-btn">
        <vs-button v-if="dollarValue != ''" @click="confirm" color="success" type="border">CONFIRM</vs-button>
        <vs-button v-else class="next-btn-disabled" disabled color="success" type="border">CONFIRM</vs-button>
      </div>
    </div>
  </v-dialog>
</template>
<script>
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
const BigNumber = require("bignumber.js");

export default {
  data() {
    return {
      modalName: "deposit-modal",
      trueValue: true,
      dollarValue: 0,
      selectedCurrencyShortName: "",
      isCurrencyConfirmed: false
    }
  },
  computed: {
    depositModal: {
      get() {
        var modal = this.$store.getters.getModalShowState(this.modalName);
        this.isCurrencyConfirmed = false;
        if (modal) {
          return modal.show;
        } else {
          return false;
        }
      },
      set(val) {
        if (!val) {
          this.isCurrencyConfirmed = false;
          this.$store.dispatch("hideModal", this.modalName)
        } else {
          this.isCurrencyConfirmed = false;
        }
      }
    },
    dollarValueBigNumber() {
      if (this.selectedCurrencyShortName == "ETH") {
        return (BigNumber(this.dollarValue).multipliedBy(BigNumber('10').exponentiatedBy(18))).toString(10)
      } else if (this.selectedCurrencyShortName == "DAI") {
        return (BigNumber(this.dollarValue).multipliedBy(BigNumber('10').exponentiatedBy(18))).toString(10)
      } else if (this.selectedCurrencyShortName == "USDC") {
        return (BigNumber(this.dollarValue).multipliedBy(BigNumber('10').exponentiatedBy(6))).toString(10)
      } else {
        return 0;
      }
    },
    width() {
      return "30%";
    }
  },
  methods: {
    next() {
      this.isCurrencyConfirmed = true;
    },
    confirm() {
      var dollarValueBigNumber = this.dollarValueBigNumber;
      var selectedCurrencyShortName = this.selectedCurrencyShortName;
      var address = this.$store.state.web3Address;
      new RampInstantSDK({
        hostAppName: 'Pool Together',
        hostLogoUrl: 'https://www.ramp.network/assets/images/Ramp-logo.a70bdb13cd50edf66e03faa96ae03839.svg',
        swapAmount: dollarValueBigNumber, // 1.5 ETH in wei
        swapAsset: selectedCurrencyShortName,
        userAddress: address
      })
        .on('*', event => console.log(event))
        .show();
      this.$store.dispatch("hideModal", this.modalName);
    }
  }
}
</script>
<style scoped lang="scss">
  .back-btn {
    color: white;
    cursor: pointer;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 2px;
  }
  .next-btn {
    text-align: center;
    font-weight: 600px;
  }
  .next-btn-disabled {
    text-align: center;
    font-weight: 600px;
    cursor: text;
  }
  .eth, .dai, .usdc {
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px auto;
    cursor: pointer;
  }
  .eth-selected, .dai-selected, .usdc-selected {
    cursor: pointer;
    background: white;
    color: black;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin: 10px auto;
  }
  .deposit-heading {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 3px;
    font-size: 24px;
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }
  .outer-container {
    background: #30475e;
    color: white;
    padding: 20px;
    margin: auto;
    border-radius: 20px;
  }
  .input-label {
    font-size: 12px;
    font-weight: 400;
    padding: 5px;
    margin-top: 10px;
  }
  .fiat-input {
    border-radius: 5px;
    padding: 0 5px;
    margin-bottom: 20px;
    width: 100%;
  }
  .ramp-logo-wrapper {
    margin: auto;
    text-align: center;
  }
  .buy-text {
    color: white;
    text-align: center;
    margin-top: 20px;
    font-size: 24px;
    font-family: monospace;
  }
  .eth-label, .dai-label, .usdc-label {
    margin-left: 15px;
  }
</style>