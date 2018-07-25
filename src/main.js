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


//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532507669300&di=f094f0ca1009979be5fbcebaaa065adb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb3b7d0a20cf431adebe131044036acaf2edd98df.jpg',
    loading:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2852462903,3649011419&fm=27&gp=0.jpg'
})


import store from './store'
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
  store,
  components: { App, swiper, swiperSlide },
  template: '<App/>'
})
