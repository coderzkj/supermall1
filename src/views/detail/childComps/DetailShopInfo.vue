<template>
  <div class="shop-info">
    <div class="top-shop">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <span class="sells-text">总销量</span>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <span class="count-text">全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '底'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter: function(value) {
      if(value < 10000) return
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 20px;
    border-top: 5px solid rgba(100, 100, 100, .1);
  }

  .top-shop {
    margin: 10px 0 10px;
  }

  .top-shop img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    vertical-align: middle;
  }

  .top-shop .title {
    padding-left: 15px;
  }

  .shop-middle {
    display: flex;
    font-size: 14px;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    position: relative;
    bottom: -25px;
    display: flex;
    height: 40px;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .info-sells,
  .info-goods {
    margin-left: 15px;
    flex: 1;
  }

  .sells-count,
  .goods-count {
    padding-bottom: 5px;
    font-size: 16px;
  }

  .sells-text,
  .count-text {
    font-size: 10px;
    text-align: center;
  }

  .shop-middle-right table{
    margin-left: 30px;

  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
    padding: 0 5px;
  }
  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span{
    background-color: #5ea732;
    color: #fff;
  }
  .shop-middle-right .better-more span {
    background-color: #f13e3a;
    color: #fff;
  }

  .shop-bottom {
    margin-top: 10px;
    text-align: center;
  }
  .shop-bottom .enter-shop {
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    border-radius: 10px;
    background-color: #f2f5f8;
  }





</style>
