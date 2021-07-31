import {ADD_COUNTER, ADD_TO_CART} from "@/store/mutation-types";

export default {
  /*
    *mutations唯一的目的就是修改state中的状态
    * mutations中每个方法尽可能完成的事件比较单一
    */
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    payload.count = 1;
    state.cartList.push(payload)
  },
  [ADD_COUNTER](state, payload) {
    payload.count += 1
  }
}
