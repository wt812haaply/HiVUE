const state = {
  popUpstatus:{
    ab: 333,
    name:'哈哈哈'
  }
}

const getters = {
  /**
   *
   * getPopUpstatus: state => {
        return state.popUpstatus
     }
   * 方法同上
   *
   */
  getCC:state => {
    return state.popUpstatus.ab
  }
  // getAA:state => state.popUpstatus.ab,
  // getBB:state => state.popUpstatus.name
}

const actions = {}

const mutations = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
