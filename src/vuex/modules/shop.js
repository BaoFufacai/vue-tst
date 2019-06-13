/*
管理商家模块相关状态数据的模块
*/
import Vue from 'vue'

import {
    RECEIVE_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    ADD_FOOD_COUNT,
    REDUCE_FOOD_COUNT,
    CLEAR_CART,
} from '../mutations-type'

import {
    reqGoods,
    reqInfo,
    reqRatings
} from '../../api'

const state={
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
    cartFoods: [], // 购物车的food数组

}

const mutations={
    //商家列表
    [RECEIVE_GOODS](state,{goods}){
        state.goods=goods
    },
    //商家信息
    [RECEIVE_INFO](state,{info}){
        state.info=info
    },
    //商家评价
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings=ratings
    },
    [ADD_FOOD_COUNT](state,{food}){
        if(!food.count){
            Vue.set(food,'count',1)
            state.cartFoods.push(food)
        }else{
            food.count++
        }
    },
    [REDUCE_FOOD_COUNT](state,{food}){
        if(food.count){
            food.count--
            if(food.count===0){
                // 一旦food没有数量了, 从购物车移除
                state.cartFoods.splice(state.cartFoods,indexOf(food),1)
            }

        }
    },
    [CLEAR_CART](state){
        // 将所有food的count置为0
        state.cartFoods.forEach(food =>food.count=0);
        // 将购物车重置为空数组
        state.cartFoods=[]
    }

}

const actions={
   async getInfo({commit}){
        //获取数据
        const result=await reqInfo()
        //判断
        if(result.code===0){
            const info=result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    async getGoods({commit},callback){
        //获取数据
        const result=await reqGoods()
        //判断
        if(result.code===0){
            const goods=result.data
            commit(RECEIVE_GOODS,{goods})
            //更新数据后立即回调
            typeof callback==='function' &&callback()
        }
    },
    async getRatings({commit},callback){
        //获取数据
        const result=await reqRatings()
        //判断成功
        if(result.code===0){
            const ratings=result.data
            commit(RECEIVE_RATINGS,{ratings})
            callback && callback()

        }
    },
    //更新指定food的数量
    updateFoodCount ({commit},{food,isAdd}){
        //判断增加还是减少
        if(isAdd){
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(REDUCE_FOOD_COUNT,{food})
        }
    },
    //清空购物车
    clearCart({commit}){
      commit(CLEAR_CART)
    }
}

const getters={
     // 总数量
     totalCount(state){
         return state.cartFoods.reduce((pre,food)=>pre+food.count,0)
     },
     //总价格
     totalPrice(state){
       return state.cartFoods.reduce((pre,food)=>pre+food.count*food.price,0)         
     },
     //设置评价总数量
     totalRatingCount(state){
      return  state.ratings.length
     },
     //设置推荐总数量
     totalupCount(state){
         return state.ratings.reduce((pre,rating)=>pre+(rating.rateType===0?1:0),0)

     }

}


export default{
    state,
    mutations,
    actions,
    getters
}
