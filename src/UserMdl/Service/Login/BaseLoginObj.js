import Login from '../../Datas/Login'

class BaseLoginObj extends Login {
  constructor () {
    super()
    this._ = ''
  }
  InitCurrentUserData (rootState) {
    throw new Error('抽象')
  }
}

export default BaseLoginObj
