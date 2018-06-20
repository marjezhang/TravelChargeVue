import Login from '../../Datas/Login'

class ILoginAction {
  LoginAction () {
    return new Login()
    // throw new Error('必须实现登录方法')
  }
}

export default ILoginAction
