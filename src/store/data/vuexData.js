//接口地址
import baidu  from '@/api/baidu'



export default {

  state:{
    cityList:[],
  },
  getters:{
    listData:state => state.cityList,
  },
  actions:{

    //1
    getData(context){
      baidu.xiaoshuoApi1().then((res )=>{
        if(res.data.code == 200){
          context.commit('getArry',res.data.data)
        }
      })
    },
  },
  mutations:{
    getArry(state, payload) {
      state.cityList = payload
    }
  }
}
