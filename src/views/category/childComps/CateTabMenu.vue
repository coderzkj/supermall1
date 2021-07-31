<template>
  <div class="cate-tab-menu">
    <scroll class="wrapper" :probe-type="2" ref="scroll">
      <div v-for="(item, index) in showCategories"
           :key="index"
           class="menu-list-item"
           @click="selectClick(index)"
           :class="{active: index === currentIndex}">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CateTabMenu",
  components: {
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    showCategories: Array
  },
  methods: {
    selectClick(index) {
      this.currentIndex = index;
      this.$emit('selectItem', index);
    }
  }
}
</script>

<style scoped>
  .wrapper {
    height: 100%;
  }

  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }

  .active {
    font-weight: 700;
    color: var(--color-tint);
    background-color: #fff;

  }
</style>
