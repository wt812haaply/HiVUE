import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import home from '@/store/data/home'


export default new Vuex.Store({
  modules: {
    home
  }
})


