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
  getPopUpstatus:state => state.popUpstatus.name
}

const actions = {}

const mutations = {
  // getStatus(state, popUpstatus) {
  //   state.popUpstatus = this.popUpstatus
  //
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
