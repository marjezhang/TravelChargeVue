const currentUserOptMdl = {
  namespaced: true,
  state: {
  //
  },
  mutations: {
    // 初始化用户信息
    InitCurrentUserInfo (state, payload, rootState) {
    // 1. 数据库请求数据
    // 2. 请求的数据放到state
      rootState.CurrentUser._id = ''
      rootState.CurrentUser._userName = ''
      rootState.CurrentUser._userKey = ''
    }
  },
  actions: {
    // 登录方法
    Login ({ commit }, ILoginAction, rootState) {
      var l = ILoginAction.LoginAction()
      rootState.CurrentUser._id = 1
      rootState.CurrentUser._login = l
      commit('InitCurrentUserInfo', null)
    }
  }
}

export default currentUserOptMdl
export const CurrentUserOptMdl = currentUserOptMdl
