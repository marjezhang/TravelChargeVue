import ILoginAction from './ILoginAction'
import WxLoginObj from './WxLoginObj'
import UserData from '../../Datas/UserData'

class LoginFromWxAction extends ILoginAction {
  _loginobj = {}
  constructor () {
    super()
    console.log('ok LoginFromWxAction constructor')
    this._loginobj = new WxLoginObj()
    console.log(this._loginobj)
  }
  LoginAction () {
    console.log('ok LoginFromWxAction')
    let mylogs = wx.getStorageSync('logs') || []
    console.log(mylogs)
    return this._loginobj
    // // 1.wx的登录处理
    // wx.login({
    //   success: () => {
    //     wx.getUserInfo({
    //       success: (res) => {
    //         console.log('ok LoginFromWxAction wx.login')
    //         this._loginobj.LoginKey = 0
    //         // this._loginobj._loginKey = res.userInfo.
    //         this._loginobj.nickName = res.userInfo.nickName
    //         this._loginobj.avatarUrl = res.userInfo.avatarUrl
    //         this._loginobj.gender = res.userInfo.gender
    //       }
    //     })
    //   },
    //   fail: () => {
    //     console.log('失败')
    //   }
    // })
    // this._requestData()
    // return this._loginobj
  }
  // 请求数据
  _requestData () {
    // 请求完数据
    this._loginobj._user = new UserData()
    // this._loginobj._user.id =
  }
}

export default LoginFromWxAction
