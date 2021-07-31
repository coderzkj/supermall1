import {ADD_COUNTER, ADD_TO_CART} from "@/store/mutation-types";

export default {
  addCart({commit, state}, payload) {
    /*ES6
    *find()方法为数组中每个元素都调用一次函数执行
    * --当数组中的元素在测试条件时返回true时，find()返回符合条件的元素，之后的之不会再调用执行函数
    * --如果没有符合条件的元素，返回undefined
    */
    //先判断cartList中有没有点击的商品
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //有则count+1;无则加入新商品
    if(oldProduct) {
      commit(ADD_COUNTER, oldProduct)
    }else {
      commit(ADD_TO_CART, payload)
    }
  }
}
