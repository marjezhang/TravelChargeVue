import UserData from './Datas/UserData'

const userMdl = {
  state: {
    CurrentUser: new UserData(),
    test1: 1
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
