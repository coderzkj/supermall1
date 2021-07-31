<template>
  <div class="tab_control">
    <div v-for="(item, index) in titles"
         class="tab_control_item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      //发出事件
      this.$emit('tabClick', index);
    }
  }

}
</script>

<style scoped>
  .tab_control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab_control_item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    padding: 0 5px 3px;
    border-bottom: 2px solid var(--color-tint);
  }

</style>
