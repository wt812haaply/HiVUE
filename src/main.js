// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import iphoneX from '@/common/iphoneX.css'
import Animate from '@/common/animate.css'
// swiper
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import store from './store'
Vue.prototype.bus = new Vue()
// title
import {afterEach} from '@/router/globalGuards'
// fastClick
import fastClick from 'fastClick'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
router.afterEach(afterEach)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, swiper, swiperSlide },
  template: '<App/>'
})
