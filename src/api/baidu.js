import axios from 'axios';
import config from './config';




// export function baiduApi() {
//   console.log(config.baiduApi)
//   return axios.get(config.baiduApi).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }

export default {

  baiduApi() {
    let urls = config.baiduApi
    return axios.get(urls).then(function(res) {
      return Promise.resolve(res)
    })
  },




  // baiduApi(){
  //   let abc = config.baiduApi
  //   return axios.get(abc).then((res) => {
  //     return Promise.resolve(res.data)
  //   })
  // }
}

