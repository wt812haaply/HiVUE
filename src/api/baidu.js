import axios from 'axios';
import config from './config';


export default {
  baiduApi() {
    let urls = config.baiduApi
    return axios.get(urls).then(function(res) {
      return Promise.resolve(res)
    })
    },

  xiaoshuoApi() {
    let urls = config.xiaoshuo
    return axios.get(urls).then(function(res) {
      return Promise.resolve(res)
    })
  },

  xiaoshuoApi1() {
    let urls = config.info
    return axios.get(urls).then(function(res) {
      return Promise.resolve(res)
    })
  },






}

