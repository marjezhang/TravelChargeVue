import ILoginAction from './ILoginAction'
import WxLoginObj from './WxLoginObj'

class LoginFromWxAction extends ILoginAction {
  constructor () {
    super()
    this._loginobj = new WxLoginObj()
  }
  LoginAction () {
    // 1.wx的登录处理
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: (res) => {
            this._loginobj._loginType = 0
            // this._loginobj._loginKey = res.userInfo.
            this._loginobj.nickName = res.userInfo.nickName
            this._loginobj.avatarUrl = res.userInfo.avatarUrl
            this._loginobj.gender  = res.userInfo.gender
          }
        })
      },
      fail: () => {
        console.log('失败')
      }
    })
    this._requestData()
    return this._loginobj
  }
  _requestData () {

  }
}

export default LoginFromWxAction
