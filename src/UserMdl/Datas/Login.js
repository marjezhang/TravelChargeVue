// const _loginKey = Symbol('_loginKey')
// const _loginName = Symbol('_loginName')
// const _loginType = Symbol('_loginType')

class Login {
  _loginKey
  _loginName
  _loginType
  constructor () {
    this._loginKey = ''
    this._loginName = ''
    this._loginType = 0 // 0:WX 1:其他
  }
  get LoginKey () {
    return this._loginKey
  }
  set LoginKey (value) {
    this._loginKey = value
  }
  get LoginName () {
    return this._loginName
  }
  set LoginName (value) {
    this._loginName = value
  }
}

export default Login
