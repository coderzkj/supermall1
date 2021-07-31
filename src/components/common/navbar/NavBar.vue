<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 -1px 2px rgba(0,0,0,.3);
}
.left,
.right {
  width: 60px;
  /*background-color: pink;*/
}
.center {
  /*设置中间区域的宽度*/
  flex: 1;
  /*background-color: blue;*/
}
</style>
