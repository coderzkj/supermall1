<template>
  <div id="home">
    <nav-bar class="nav_bar">
      <h3 slot="center">购物街</h3>
    </nav-bar>
    <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControl1" v-show="isTabFixed" class="fixed">
    </tab-control>

    <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControl2"></tab-control>
      <good-list :goods="showGoods" />
    </scroll>

    <!--    监听组件的原生事件时，给对应事件加上.native修饰符-->
    <back-top @click.native="backClick" v-show="isShowBackup" />

  </div>
</template>

<script>
  import HomeSwiper from "./ChildComps/HomeSwiper";
  import RecommendView from "./ChildComps/RecommendView";
  import FeatureView from "./ChildComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodList from "components/content/goods/GoodList";
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/content/backTop/BackTop";

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home";

  import {
    imgListenerMixin,
    tabControlMixin
  } from "@/common/mixin";
  import {
    BACKTOP_DISTANCE
  } from "@/common/const";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    data() {
      return {
        banners: [],
        recommend: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        isShowBackup: false,
        tabOffsetTop: 0,
        isTabFixed: false,
      }
    },
    created() {
      //  created中只写主要的逻辑关系
      //  1.请求多个数据
      this.getHomeMultidata()

      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /*
       * 事件监听相关的方法
       * */
      // tabClick(index) {
      //   switch(index) {
      //     case 0:
      //       this.currentType = 'pop';
      //       break;
      //     case 1:
      //       this.currentType = 'new';
      //       break;
      //     case 2:
      //       this.currentType = 'sell';
      //       break;
      //   }
      //   //tabControl栏选中的商品大标题一致
      //   this.$refs.tabControl1.currentIndex = index;
      //   this.$refs.tabControl2.currentIndex = index;
      //
      // },

      //监听轮播图加载完成
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      //回到顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },

      //监听滚动
      contentScroll(position) {
        //判断backTop是否显示
        this.isShowBackup = (-position.y) > BACKTOP_DISTANCE

        //决定tabControl是否吸顶（position: fixed）  40为tabControl的高度
        this.isTabFixed = position.y < -this.tabOffsetTop + 40
      },

      //加载更多数据
      loadMore() {
        this.getHomeGoods(this.currentType)
      },


      /*
       *网络请求相关的方法
       * */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          //完成上拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    mixins: [imgListenerMixin, tabControlMixin]
  }

</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
  }

  .nav_bar {
    /*浏览器原生滚动时*/
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 5;*/
    background-color: var(--color-tint);
    color: #fff;
  }

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 8;
  }

  .wrapper {
    height: calc(100% - 49px);
    overflow: hidden;
  }

</style>
