const currentBillOpt = {
  namespaced: true,
  mutations: {
    requestBillData (state, billDataKeyDto) {
      console.log('用模块请求，请求billDataKeyDto')
    }
  },
  actions: {
    OpenBill ({ state, rootState, commit, dispatch, getters, rootGetters }, billDataDto) {
      console.log('rootState.BillMdl.CurrentBill = billDataDto')
    }
  }
}

export default currentBillOpt
export const CurrentBillOpt = currentBillOpt
