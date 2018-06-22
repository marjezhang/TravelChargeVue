const currentUserOptMdl = {
  namespaced: true,
  state: {
  //
  },
  mutations: {
  //
  },
  actions: {
    // 登录方法
    Login ({ dispatch, commit, getters, rootState }, ILoginAction) {
      var loginobj = ILoginAction.LoginAction()
      loginobj.InitCurrentUserData(rootState)
    }
  }
}

export default currentUserOptMdl
export const CurrentUserOptMdl = currentUserOptMdl
