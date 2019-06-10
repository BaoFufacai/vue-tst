//包含间接更新方法
import {
    reqAddress,
    reqShops,
    reqCategorys,
    reqLogout
} from '../api'

import {
    RECEIVE_ADDRESS,
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RESET_USER
} from './mutations-type'

//暴露出去
export default {
    async getAddress ({commit, state}) {
    const {longitude, latitude} = state
    // 1. 执行异步(发ajax请求获取数据)
    const result = await reqAddress(longitude, latitude)
    // 2. 成功后, 提交mutation更新状态数据
    if (result.code===0) {
      console.log(11111)
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
    /* 
  获取商品分类列表的异步action
  */
  async getCategorys ({commit}) {
    // 1. 执行异步(发ajax请求获取数据)
    const result = await reqCategorys()
    // 2. 成功后, 提交mutation更新状态数据
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },

  /* 
  获取商家列表的异步action
  */
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    // 1. 执行异步(发ajax请求获取数据)
    const result = await reqShops(longitude, latitude)
    // 2. 成功后, 提交mutation更新状态数据
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },
    /* 
  退出登陆的异步action
  */
  async logout ({commit}) {
    // 发退出登陆的ajax请求
    const result = await reqLogout()
    // 成功后重置user数据
    if (result.code===0) {
      commit(RESET_USER)
    }
  } 
}

