<template>
  <div class="recommend-info">
    <div class="recommend-title">热门推荐</div>
    <good-list :goods="recommend"/>
  </div>
</template>

<script>
import GoodList from "@/components/content/goods/GoodList";
export default {
  name: "DetailRecommendInfo",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodList,
  }

}
</script>

<style scoped>
  .recommend-info {
    padding: 20px 5px 0 5px;
    font-size: 14px;
    border-top: 5px solid rgba(100, 100, 100, .1);
  }

  .recommend-title {
    padding: 0 0 20px 10px;
    font-size: 15px;
  }
</style>
