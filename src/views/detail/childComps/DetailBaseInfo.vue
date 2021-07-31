<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .detail-base-info {
    padding: 10px;
    margin-bottom: 10px;
  }

  .info-title {
    margin: 10px 0;
    color: #222;
    text-indent: 0.5em;
  }
  .info-price .n-price {
    color: var(--color-high-text);
    font-size: 22px;
  }

  .info-price .o-price {
    padding: 0 5px;
    font-size: 12px;
    text-decoration: line-through;
  }
  .info-price .discount {
    position: relative;
    top: -10px;
    left: 0;
    margin-top: -10px;
    padding: 3px 5px;
    font-size:12px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 10px;
  }

  .info-other,
  .info-services {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-top: 20px;
  }

  .info-other {
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    color: #999;
  }


  .info-services img {
    width: 15px;
    height: 15px;
    vertical-align: bottom;
  }


</style>
