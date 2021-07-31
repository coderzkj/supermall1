<template>
<div class="tab_bar_item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      // default: 'deeppink'
      default: 'rgb(255, 129, 152)'
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      //判断当前路径是不是this.path
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      //动态绑定字体颜色
      return this.isActive ? {color: this.activeColor} : {};
    }
  }
}
</script>

<style scoped>
/*引入css文件*/
@import "../../../assets/css/base.css";
.tab_bar_item {
  flex: 1;
  text-align: center;
}
.tab_bar_item img{
  margin-top: 3px;
  width: 25px;
  height: 25px;
  /*去掉img下方的margin*/
  /*vertical-align: bottom;*/
}
.tab_bar_item div {
  font-size: 12px;
}
</style>
