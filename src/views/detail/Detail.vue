<template>
  <div id="details">
    <detail-nav-bar class="detail-nav-bar"
                    @itemClick="itemClick"
                    ref="navbar"></detail-nav-bar>
    <scroll ref="scroll"
            class="wrapper"
            :probeType="2"
            @scroll="scrollPosition">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :goods-info="goodsInfo" @imgLoad="imgLoad"/>
      <detail-params-info ref="params" :params-info="paramsInfo"/>
      <detail-comments-info ref="comments" :comments-info="commentsInfo"/>
      <detail-recommend-info ref="recommend" :recommend="recommend"/>
    </scroll>

    <back-top v-show="isShowBackTop" @click.native="backClick"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentsInfo from "./childComps/DetailCommentsInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import {getDetail, Goods, Shop, GoodsInfo, ParamsInfo, getRecommend} from "network/detail";

import {imgListenerMixin} from "@/common/mixin";
import {BACKTOP_DISTANCE} from "@/common/const";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      paramsInfo: {},
      commentsInfo: [],
      recommend: [],
      themeTopYs: [0],
      currentIndex: null,
      isImagesLoader: false,
      isShowBackTop: false,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentsInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
    BackTop,
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;

    //2.根据iid获取detail数据
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      // console.log(data);
      //2.1保存轮播图图片
      this.topImages = data.itemInfo.topImages;
      //2.2保存商品标题数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //2.3保存商品店铺数据
      this.shop = new Shop(data.shopInfo)
      //2.4保存展示详情
      this.goodsInfo = new GoodsInfo(data.detailInfo, data.detailInfo.detailImage[0])
      //2.5保存商品参数
      this.paramsInfo = new ParamsInfo(data.itemParams.info, data.itemParams.rule)
      //2.6保存用户评论
      if(data.rate.list){
        this.commentsInfo = data.rate.list
      }
    })

    //3.获取推荐信息
    getRecommend().then((res) => {
      this.recommend = res.data.data.list
    })

  },
  methods: {
    //监测goodsInfo图片是否加载完毕
    imgLoad() {
      this.$refs.scroll.refresh()
      this.themeTopYs.push(this.$refs.params.$el.offsetTop, this.$refs.comments.$el.offsetTop, this.$refs.recommend.$el.offsetTop)
      this.isImagesLoader = true
    },
    //点击detail导航栏时，到相应的位置; 导航栏高度为44
    itemClick(index) {
      if (this.themeTopYs.length == 4) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44)
      }
    },
    //监听滚动的位置
    scrollPosition(position) {
      //44为navbar的高度
      //navBarItem随滚动而改变
      let positionY = -position.y + 44;
        for (let i = 0; i < this.themeTopYs.length && this.isImagesLoader; i++) {
          if (positionY < this.themeTopYs[i]) {
            break
          }
          this.currentIndex = i;
        }
        this.$refs.navbar.currentIndex = this.currentIndex;

        //判断backtop是否显示
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE;
    },
    //点击backtop回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    //点击购物车添加商品
    addToCart() {
      const obj = {};
      obj.iid = this.iid;
      obj.img = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goodsInfo.desc;
      obj.price = this.goods.realPrice;
      this.$store.dispatch('addCart', obj);
    }
  },
  mixins: [imgListenerMixin]
}
</script>

<style scoped>
 #details {
   position: relative;
   z-index: 9;
   height: 100vh;
   background-color: #fff;
 }
 .detail-nav-bar {
   position: relative;
   z-index: 10;
   background-color: #fff;
 }

 .wrapper {
   height: calc(100% - 44px - 49px);
 }
</style>
