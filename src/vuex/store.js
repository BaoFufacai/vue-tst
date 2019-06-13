    
/* 
vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from "vuex"

//import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import msite from './modules/msite'
import shop from './modules/shop'
import user from './modules/user'


// 声明使用vue插件
Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{
    msite,
    shop,
    user
  }
})