import ILoginAction from './ILoginAction'
import Login from '../../Datas/Login'

class LoginAction extends ILoginAction {
  LoginAction () {
    // 1.wx的登录处理
    var l = new Login()
    l._loginKey = ''
    l._loginName = ''
    l._loginType = ''
    return l
  }
}

export default LoginAction
