import BaseLoginObj from './BaseLoginObj'

class WxLoginObj extends BaseLoginObj {
  constructor () {
    super()
    this.nickName = '' // 用户昵称
    this.avatarUrl = '' // 用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表132*132正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。
    this.gender = '' // 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知
    this.city = '' // 用户所在城市
    this.province = '' // 用户所在省份
    // 用户所在国家
    this.country = ''
    // 用户的语言，简体中文为zh_CN
    this.language = ''

    this._user = {}
  }
  InitCurrentUserData (rootState) {
    console.log('wxloginobj Initcurrentuserdata')
    // 1.直接请求数据
    // rootState.CurrentUser._id = this._user._id
  }
}

export default WxLoginObj
