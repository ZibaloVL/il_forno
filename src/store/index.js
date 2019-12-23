import Vue from 'vue'
import Vuex from 'vuex'
import menuFood from './menuFood'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: [1, 2, 3]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menuFood
  }
})
