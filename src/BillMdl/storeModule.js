import Bill from './Datas/Bill'

const billMdl = {
  state: {
    CurrentBill: new Bill()
  },
  mutations: {
    OpenBill (State, Id) {
      // 打开一个订单，根据订单编号
    },
    SetBill (State, bill) {
      // 设置当前订单
    }
  },
  actions: {
    // 设置默认账单
    OpenDefaultBill ({ commit, state }, bill) {
      commit('SetBill', bill)
    }
  }
}

export default billMdl
export const BillMdl = billMdl
