<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar">
      <h3 slot="center">购物车({{allCount}})</h3>
    </nav-bar>

    <scroll class="wrapper" ref="scroll">
      <cart-list/>
    </scroll>

    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import Scroll from "@/components/common/scroll/Scroll"
import CartList from "@/views/shopcart/childComps/CartList"
import CartBottomBar from "@/views/shopcart/childComps/CartBottomBar"

import { mapGetters} from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['allCount'])
  },
  mounted() {
    // console.log(this.$refs.scroll.scroll)
  }
}
</script>

<style scoped>
  .shop-cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .wrapper {
    height: calc(100% - 44px - 49px - 44px);
    overflow: hidden;
  }
</style>
