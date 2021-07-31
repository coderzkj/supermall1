<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-desc clear-fix">
      <div class="start left"></div>
      <div class="desc">{{goodsInfo.desc}}</div>
      <div class="end right"></div>
    </div>
    <div class="info-title">{{goodsInfo.title}}</div>
    <div class="info-list">
      <img v-for="item in goodsInfo.imgList" :src="item" alt="" @load="imgClick">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      loadCount: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgClick() {
      // this.loadCount += 1;
      // if(this.loadCount === this.imagesLength)
      if( ++ this.loadCount === this.imagesLength){
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    goodsInfo() {
      //响应数据变化（当goodsInfo发生改变时，执行)
      this.imagesLength = this.goodsInfo.imgList.length;
    }
  }
}
</script>

<style scoped>
  .goods-info {
    border-top: 5px solid rgba(100, 100, 100, .1);
    padding-bottom: 10px;
  }
  .info-desc {
    margin: 10px 15px;
    /*padding-top:  10px;*/
  }
  .info-desc .start,
  .info-desc .end {
    position: relative;
    width: 25%;
    height: 1px;
    background-color: #a3a3a5;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 5px;
    background-color: #333;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 20px 0;
    font-size: 14px;
  }

  .info-title {
    padding: 0 0 10px 10px;
    color: #222222;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>
