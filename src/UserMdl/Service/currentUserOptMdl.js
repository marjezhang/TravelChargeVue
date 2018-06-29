const currentUserOptMdl = {
  namespaced: true,
  state: {
  //
  },
  mutations: {
  //
  },
  actions: {
    // 登录方法事件
    Login ({ dispatch, commit, getters, rootState }, ILoginAction) {
      let loginobj = ILoginAction.LoginAction()
      loginobj.InitCurrentUserData(rootState)
      // 发布一个事件给账单模块
      dispatch('BillMdl/LoginForUser', loginobj.user, { root: true })
    }
  }
}

export default currentUserOptMdl
export const CurrentUserOptMdl = currentUserOptMdl
