import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import vuexText from '@/store/data/vuexText'
import vuexData from '@/store/data/vuexData'


export default new Vuex.Store({
  modules: {
    vuexText,
    vuexData
  }
})


