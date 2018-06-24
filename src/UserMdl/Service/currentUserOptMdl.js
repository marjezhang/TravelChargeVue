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
      let loginobj = ILoginAction.LoginAction()
      console.log(loginobj)
      loginobj.InitCurrentUserData(rootState)
    }
  }
}

export default currentUserOptMdl
export const CurrentUserOptMdl = currentUserOptMdl
