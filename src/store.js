import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedMembershipOption: '',
    selectedPublisherOption: '',
    error: '',
  },
  mutations: {
    SET_MEMBERSHIP_OPTION: (state, option) => {
      Vue.set(state, 'selectedMembershipOption', option);
    },
    SET_PUBLISHER_OPTION: (state, option) => {
      Vue.set(state, 'selectedPublisherOption', option);
    },
    SET_ERROR: (state, error) => {
      Vue.set(state, 'error', error);
    },
  },
  actions: {
  }
})
