class ILoginAction {
  LoginAction () {
    throw new Error('return new Login')
  }
  InitStateUserInfo () {
    throw new Error('必须实现')
  }
}

export default ILoginAction
