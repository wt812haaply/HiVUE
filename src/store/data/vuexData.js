//接口地址
import baidu  from '@/api/baidu'



export default {
  state:{
    cityList:[],
  },
  getters:{
    getVxiaoshuoApi1:state => state.cityList,
  },
  actions:{
    getVxiaoshuoApi1(context){
      baidu.xiaoshuoApi1().then((res )=>{
        if(res.data.code == 200){
          context.commit('getVxiaoshuoApi1',res.data.data)
        }
      })
    }
  },
  mutations:{
    getVxiaoshuoApi1(state, list) {
      state.cityList = list
    }
  }
}
