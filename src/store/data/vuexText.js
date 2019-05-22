export default {
  state:{
    textInfo:'这里是测试信息，由vuex数据共享<<VUEX.JS>>'
  },
  getters:{
    getTestInfo:state => state.textInfo
  },
  actions:{},
  mutations:{}
}
