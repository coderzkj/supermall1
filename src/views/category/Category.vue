<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="cate-content">
      <cate-tab-menu :show-categories="categories" @selectItem="selectItem" class="cate-tab-menu"/>
      <scroll id="tab-content" ref="scroll">
        <cate-tab-content :tab-content-data="showSubCategories"/>
        <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick"/>
        <good-list :goods="showCategoryDetail"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import CateTabMenu from "./childComps/CateTabMenu"

import Scroll from "@/components/common/scroll/Scroll"
import CateTabContent from "@/views/category/childComps/CateTabContent"
import TabControl from "@/components/content/tabControl/TabControl"
import GoodList from "@/components/content/goods/GoodList"

import {getCategory, getSubcategory, getCategoryDetail} from "@/network/category"
import {tabControlMixin} from "@/common/mixin"


export default {
  name: "Category",
  components: {
    NavBar,
    CateTabMenu,
    Scroll,
    CateTabContent,
    TabControl,
    GoodList
  },
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: 0,
    }
  },
  created() {
    //请求分类数据
    this._getCategory();

  //  监听图片加载完成
    this.$EventBus.$on('itemImageLoad', () => {
      this.$refs.scroll.refresh()
    })

    console.log(this.currentType)
  },
  methods: {
    //请求数据
    _getCategory() {
      getCategory().then(res => {
        // 获取分类数据
        this.categories = res.data.data.category.list;
        // console.log(this.categories);

        //初始化每个类别的子数据
        for(let i = 0; i < this.categories.length; i ++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }

        //请求第一个分类的数据
        this._getSubcategory(0)
      })
    },

    _getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        //获取子分类数据
        this.categoryData[index].subcategories = res.data.data;
        this.categoryData = {...this.categoryData};
        // console.log(this.categoryData)
        this._getCategoryDetail('pop')
        this._getCategoryDetail('sell')
        this._getCategoryDetail('new')
      })
    },

    _getCategoryDetail(type) {
      this.currentType = type;
      //获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      //发送请求
      getCategoryDetail(miniWallkey, type).then(res => {
        //获取推荐数据
        this.categoryData[this.currentIndex].categoryDetail[type] = res
      })
    },

    //事件相应相关的方法
    selectItem(index) {
      this._getSubcategory(index)
    },

  },
  computed: {
    showSubCategories() {
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType].data
    }
  },
  mixins: [tabControlMixin]
}
</script>

<style scoped>
  #category {
    height: 100vh;
    width: 100vw;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }

  .cate-content {
    display: flex;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }

  .cate-tab-menu {
    flex: 1;
    height: 100%;
    background-color: #f4f4f4;
    box-sizing: border-box;
  }

  #tab-content {
    height: 100%;
    flex: 3;
  }

</style>
