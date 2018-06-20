import UserData from './Datas/UserData'
import { CurrentUserOptMdl } from './Service/currentUserOptMdl'

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
  //
  },
  actions: {
    //
  }
}

export default userMdl
export const UserMdl = userMdl
