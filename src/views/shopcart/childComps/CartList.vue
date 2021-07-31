<template>
  <div class="cart-list">
    <cart-list-item v-for="item in cartItem"
                    :key="item.iid"
                    :item-data="item"/>
  </div>
</template>

<script>
import CartListItem from "@/views/shopcart/childComps/CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    cartItem: function (){
     return this.$store.state.cartList
    }
  }
}
</script>

<style scoped>
  .cart-list {
    width: 100vw;
  }
</style>
