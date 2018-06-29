class UserData {
  constructor () {
    this._id = null
    this._userKey = ''
    this._login = null
    this._userName = ''
  }
  get Id () {
    return this._id
  }
  set Id (value) {
    this._id = value
  }
  get UserKey () {
    return this._userKey
  }
  set UserKey (value) {
    this._userKey = value
  }
  get UserName () {
    return this._userName
  }
  set UserName (value) {
    this._userName = value
  }
}

export default UserData
