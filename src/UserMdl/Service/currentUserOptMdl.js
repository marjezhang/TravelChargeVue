// async function getStockPriceByName (name) {
//   var symbol = await loadImageAsync(name).then(function () {
//     console.log('loadImageAsync 成功执行完成')
//   })
//   console.log('getStockPriceByName end out')
//   console.log(symbol)
//   return symbol
// }
//
// function loadImageAsync (url) {
//   console.log('开始promise')
//   return new Promise(function (resolve, reject) {
//     console.log('Promise' + (new Date()).toLocaleTimeString())
//     setTimeout(resolve, 3000, 'done')
//     // resolve()
//     console.log('end promise')
//   })
// }
async function LoginAsync ({ dispatch, commit, getters, rootState }, ILoginAction) {
  let loginobj = await ILoginAction.LoginAction()
  loginobj.InitCurrentUserData(rootState)
  // 发布一个事件给账单模块
  dispatch('BillMdl/LoginForUser', loginobj.user, { root: true })
}

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
      console.log('异步 进入')
      LoginAsync({ dispatch, commit, getters, rootState }, ILoginAction).then(function () {
        console.log('loginasync ok')
      })
    }
  }
}

export default currentUserOptMdl
export const CurrentUserOptMdl = currentUserOptMdl
