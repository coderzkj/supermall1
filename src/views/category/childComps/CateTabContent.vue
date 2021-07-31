<template>
  <div class="cate-tab-content">
    <grid-view :cols="3" :line-space="30" :v-margin="10" v-if="tabContentData.list">
      <div v-for="(item, index) in tabContentData.list" :key="index" class="sub-item">
        <a :href="item.link" class="sub-item">
          <img :src="item.image" alt="" class="sub-item-img">
          <p class="sub-item-title">{{item.title}}</p>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from "@/components/common/gridView/GridView"
export default {
  name: "CateTabContent",
  props: {
    tabContentData: {}
  },
  components: {
    GridView
  }
}
</script>

<style scoped>
  .sub-item {
    text-align: center;
    font-size: 12px;
  }

  .sub-item-img {
    width: 80%;
  }

  .sub-item-title {
    margin-top: 15px;
  }
</style>
