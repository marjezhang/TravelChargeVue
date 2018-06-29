import ILoginAction from './ILoginAction'
import WxLoginObj from './WxLoginObj'
// import UserData from '../../Datas/UserData'

class LoginFromWxAction extends ILoginAction {
  _loginobj = {}
  constructor () {
    super()
    this._loginobj = new WxLoginObj()
  }
  LoginAction () {
    console.log('ok LoginFromWxAction')
    console.log(this._loginobj)
    // let mylogs = wx.getStorageSync('logs') || []
    // console.log(mylogs)
    // return this._loginobj
    // 1.wx的登录处理
    // wx.login({
    //   success: function (res) {
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
    //   }
    // })
    this._requestData()
    return this._loginobj
  }
  // 请求数据
  _requestData () {
    console.log('requesdata from LoginFrpmWxAction')
    // 请求完数据
    // this._loginobj._user = new UserData()
    // this._loginobj._user.id =
  }
}

export default LoginFromWxAction
