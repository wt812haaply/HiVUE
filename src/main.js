// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

// 样式
// import iphoneX from '@/common/style/iphoneX.css'
// import Animate from '@/common/style/animate.css'

import  iconFont from '@/common/style/iconFont.css'
// swiper
// import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {swiper, swiperSlide} from 'vue-awesome-swiper'


//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'https://img.zcool.cn/community/018f755a5cc0f7a80120121fa17b20.jpeg@520w_390h_1c_1e_1o_100sh.jpg',
    loading:'https://file.digitaling.com/eImg/uimages/20160802/1470137310487029.gif'
})

// scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

//store
import store from './store'


//axios
// import axios from 'axios'
import axios from './common/js/http'
Vue.prototype.axios = axios

//bus
Vue.prototype.bus = new Vue()

// title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

// fastClick
import fastClick from 'fastClick'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
// router.afterEach(afterEach)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App, swiper, swiperSlide },
  template: '<App/>'
})
