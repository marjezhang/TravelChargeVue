import ILoginAction from './ILoginAction'
import WxLoginObj from './WxLoginObj'
import UserData from '../../Datas/UserData'

class LoginFromWxAction extends ILoginAction {
  _loginobj = {}
  constructor () {
    super()
    this._loginobj = new WxLoginObj()
    this._wxLoginRes = {}
    this._wxGetUserInfoRes = {}
  }
  async LoginAction () {
    console.log('loginaciton  in')
    // 1.wx的登录处理
    await this._getLoginAsync()
    await this._getUserInfoAsync()
    console.log('loginaction next')
    this._requestData()
    return this._loginobj
  }
  // 请求数据
  _requestData () {
    console.log('requesdata from LoginFrpmWxAction')
    // 请求完数据
    this._loginobj.user = new UserData()
    this._loginobj.user.Id = 1
  }
  async _getUserInfoAsync () {
    return new Promise(function (resolve, reject) {
      wx.getUserInfo({
        success: function (res) {
          console.log('ok LoginFromWxAction wx.login')
          this._wxGetUserInfoRes = res
          console.log(this._wxGetUserInfoRes)
          resolve(res)
          // this._loginobj.LoginKey = 0
          // // this._loginobj._loginKey = res.userInfo.
          // this._loginobj.nickName = res.userInfo.nickName
          // this._loginobj.avatarUrl = res.userInfo.avatarUrl
          // this._loginobj.gender = res.userInfo.gender
        }
      })
    })
  }
  async _getLoginAsync () {
    return new Promise(function (resolve, reject) {
      wx.login({
        success: function (res) {
          console.log('wx.login success')
          this._wxLoginRes = res
          console.log(this._wxLoginRes)
          resolve(res)
        }
      })
    })
  }
}

export default LoginFromWxAction
