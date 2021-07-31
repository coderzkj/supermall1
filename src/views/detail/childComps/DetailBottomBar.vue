<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div>
        <i class="service icon"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="shop icon"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="select icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="bar-cart" @click="addToCart">加入购物车</div>
      <div class="bar-buy">购买</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    bottom: 0;
    display: flex;
    height: 49px;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-left div:nth-child(n) {
    padding: 3px 15px;
    flex: 1;
    background-color: #fff;
  }

  .bar-left .icon {
    display: block;
    margin: 0 4px 3px 4px;
    height: 22px;
    width: 22px;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
  }

  .bar-left .service {
    background-position: 0 -53px;
  }
  .bar-left .shop {
    background-position: 0 -249px;
  }

  .bar-right>div {
    flex: 1;
    text-align: center;
    line-height: 49px;
  }

  .bar-right .bar-cart {
    background-color: #FFE817;
  }

  .bar-right .bar-buy {
    background-color: #FF6699;
  }
</style>
