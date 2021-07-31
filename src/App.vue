<template>
  <div id="app">
    <main_tab_bar></main_tab_bar>
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  import main_tab_bar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      main_tab_bar,
    },
  }

</script>

<style>
  @import "./assets/css/base.css";

</style>
