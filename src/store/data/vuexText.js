export default {
  state:{
    allInfo:{
      text:'这里是测试信息，由vuex数据共享<<VUEX.JS>>',
      msg:'1000000'
    }
  },
  getters:{
    getTestInfo:state => state.allInfo
  },
  actions:{},
  mutations:{}
}
