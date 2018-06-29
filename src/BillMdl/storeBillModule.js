import Bill from './Datas/Bill'
import { CurrentBillOpt } from './Service/currentBillOpt'

const billMdl = {
  namespaced: true,
  state: {
    CurrentBill: new Bill(),
    test1: 'opq'
  },
  modules: {
    CurrentBillOptMdl: CurrentBillOpt
  },
  mutations: {
  //
  },
  actions: {
    // 登录事件订阅
    LoginForUser ({ state, rootState, commit, dispatch, getters, rootGetters }, defaultbillDto) {
      console.log('bill mdl dispatch LoginForUser')
      dispatch('CurrentBillOptMdl/OpenBill', defaultbillDto)
    }
  }
}

export default billMdl
export const BillMdl = billMdl
