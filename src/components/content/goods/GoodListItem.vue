<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodsItem: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        //首页的goods和详情页的recommend image数据目录不一样
        return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
        //为什么不能改变位置？
        // return this.goodsItem.image || this.goodsItem.show.img || this.goodsItem.img

      }
    },
    methods: {
      //监听图片加载
      imageLoad() {
        /*
        detail页面推荐部分图片加载时，会在home页面监听
        方法1：对两个页面分别发送不同的监听函数
        */
        // if(this.$route.path.indexOf('/home')) {
        //   this.$EventBus.$emit('homeImageLoad')
        // } else if(this.$route.path.indexOf('/detail')) {
        //   this.$EventBus.$emit('detailImageLoad')
        // }
        this.$EventBus.$emit('itemImageLoad')
      },

      itemClick() {
        //动态路由
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }

</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 44px;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 6px;
  }

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
    font-size: 12px;

  }


  .goods-info p {
    margin-bottom: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    /*0表示背景颜色；0/14px 0表示position，14px表示横向大小；14px表示纵向大小（可不写）*/
    background: url("~assets/img/common/collect.svg") 0 0/14px;
  }

</style>
