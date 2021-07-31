<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  /*将盒子定位到页面底部(固定定位)*/
  position: fixed;
  left: 0;
  bottom: 0;

  /*盒子弹性布局*/
  display: flex;
  /*定义项目在主轴上的对齐方式*/
  justify-content: space-around;

  /*固定盒子大小*/
  height: 49px;
  width: 100%;
  background-color: #f4f4f4;
  box-shadow: 0px -1px 5px rgba(0,0,0,.2);
}
</style>
