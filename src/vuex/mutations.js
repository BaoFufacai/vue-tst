/* 
一个包含n个用来直接更新状态数据的方法的对象
*/
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RESET_USER,
    RECEIVE_USER
  } from './mutations-type'
  
  export default {
    [RECEIVE_ADDRESS](state, address) {
      state.address = address
    },
    [RECEIVE_CATEGORYS](state, categorys) {
      state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, shops) {
      state.shops = shops
    },
    [RECEIVE_USER](state, user) {
      state.user = user
    },
    [RESET_USER](state) {
      state.user = {}
    },
    
   

  }