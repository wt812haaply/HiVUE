import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import home from '@/store/data/home'
import four from '@/store/data/four'


export default new Vuex.Store({
  modules: {
    home,
    four
  }
})


