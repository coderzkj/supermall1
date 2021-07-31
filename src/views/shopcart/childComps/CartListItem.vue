<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <!--记录商品是否选中，要保存在商品模型中-->
      <check-button :is-checked="itemData.checked" @click.native="checkClick"/>
    </div>
    <div class="item-img">
      <img :src="itemData.img" alt="">
    </div>
    <div class="item-info">
      <div class="info-title">{{itemData.title}}</div>
      <div class="info-desc">商品描述：{{itemData.desc}}</div>
      <div class="info-bottom">
        <div class="info-price left">￥{{itemData.price}}</div>
        <div class="info-count right">×{{itemData.count}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import CheckButton from "@/views/shopcart/childComps/CheckButton"
export default {
  name: "CartListItem",
  props: {
    itemData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.itemData.checked = !this.itemData.checked
    }
  }
}
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    position: relative;
    top: 40px;
  }

  .item-img {
    padding: 0 10px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    border-radius: 10px;
    vertical-align: middle;
  }

  .item-info {
    padding: 0 10px 5px 5px;
    font-size: 17px;
    color: #333;
    overflow: hidden;
  }
  .info-title,
  .info-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .info-desc {
    padding: 15px 0 20px;
    font-size: 13px;
    color: #666;
  }

  .info-price {
    color: orangered;
  }

</style>
