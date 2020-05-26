<template>
  <div>
    <v-app>
      <pool-header></pool-header>
      <home-component></home-component>
    </v-app>
    <deposit-modal></deposit-modal>
  </div>
</template>

<script>
import Home from '@/views/Home.vue';
import PoolHeader from "@/components/Header";
import DepositModal from "@/modals/DepositModal.vue";
export default {
  name: 'App',

  components: {
    "home-component": Home,
    PoolHeader,
    DepositModal
  },

  data: () => ({
    //
  }),
  created() {
    var version = 8;
    if (this.$store.state.version != version) {
      this.$store.dispatch("resetState");
      this.$store.dispatch("setVersion", version);
    }
  }
};
</script>
