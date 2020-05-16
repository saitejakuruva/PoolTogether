import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
    // [vuexCache]
  ],
  state: {
    web3Address: "",
    modals: [
      {
        name: "deposit-modal",
        data: {

        },
        show: false
      }
    ]
  },
  mutations: {
    setWeb3Address(state, address) {
      state.web3Address = address;
    },
    hideModal(state, name) {
      state.modals.forEach(
        modal => {
          if (modal.name == name) {
            modal.show = false;
          }
        }
      );
    },
    showModalWithOptions(state, data) {
      state.modals.forEach(
        modal => {
          if (modal.name == data.name) {
            modal.data = data.data
            modal.show = true;
          }
        }
      );
    }
  },
  actions: {
    setWeb3Address({commit}, address) {
      commit("setWeb3Address", address);
    },
    hideModal({commit}, name) {
      commit("hideModal", name);
    },
    showModalWithOptions({commit}, data) {
      commit("showModalWithOptions", data);
    }
  },
  getters: {
    getModalShowState(state) {
      var modals = state.modals;
      return function(name)  {
        return (modals.find(modal => modal.name == name))
      }
    }
  },
  modules: {
  }
})
