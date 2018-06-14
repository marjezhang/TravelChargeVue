import Vue from 'vue'
import Vuex from 'vuex'
import { UserMdl } from './UserMdl/storeModule'
import { BillMdl } from './BillMdl/storeModule'

Vue.use(Vuex)

// 先实现简单的模块加入即可，后期需要引入动态加载模块的  插件思路类似 Vue.use(Vuex) 内部的实现方法【quarrier review】
export const store = new Vuex.Store({
  modules: {
  //  可以在此加模块
    UserMdl: UserMdl,
    BillMdl: BillMdl
  }
})
