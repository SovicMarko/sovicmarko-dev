import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eng : false
  },
  mutations: {
    langSwitch (state) {
      state.eng = !state.eng
    }
  },
  actions: {
    
  },
  modules: {
  }
})
