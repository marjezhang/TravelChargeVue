import UserData from './Datas/UserData'
import { CurrentUserOptMdl } from './currentUserOptMdl'

const userMdl = {
  namespaced: true,
  state: {
    CurrentUser: new UserData(),
    test1: 1
  },
  modules: {
    CurrentUserOptMdl: CurrentUserOptMdl
  },
  mutations: {
    Login (state) {
    // 1.wx的获取
    // 2.获取后端信息验证
    //   3.当前用户状态赋值
    }
  },
  actions: {
    //
  }
}

export default userMdl
export const UserMdl = userMdl
