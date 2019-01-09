//接口地址
import baidu  from '@/api/baidu'

const state = {
  cityList:[],
  textInfo:'这里是测试信息，由four提供'
}

const getters = {

  /**
   * 1.
   * getPopUpstatus: state => {
   *  return state.popUpstatus
   * }
   *
   * 2.
   * getVxiaoshuoApi1:state => state.cityList
   *
   * 以上2种方式相同
   *
   */


  /**
   *
   * getVxiaoshuoApi1:state => state.cityList.[0].author  获取数组里的=>author
   *
   */

  getVxiaoshuoApi1:state => state.cityList,
  getTestInfo:state => state.textInfo

}

const actions = {
  getVxiaoshuoApi1(context){
    baidu.xiaoshuoApi1().then((res )=>{
      if(res.data.code == 200){
        context.commit('getVxiaoshuoApi1',res.data.data)
      }
    })
  }
}

const mutations = {
  getVxiaoshuoApi1(state, list) {
    state.cityList = list
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
