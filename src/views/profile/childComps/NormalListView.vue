<template>
  <div class="normal-list-view">
    <ul>
      <li v-for="(item, index) in dataList" :key="index">
        <span class="item-icon"><img :src="iconURL(item)" alt=""></span>
        <div class="item-text">{{item.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NormalListView",
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    iconURL(item) {
      //因为图片是本地路径的话，在webpack中会被当成字符串来处理，不会转换为图片路径
      return require('assets/img/profile/' + item.icon)
    }
  }
}
</script>

<style scoped>
  .normal-list-view {
    padding-left: 15px;
    margin-top: 15px;
    background-color: #fff;
  }

  .normal-list-view ul li {
    display: flex;
  }

  .item-icon {
    padding-top: 8px;
  }

  .item-icon img {
    height: 20px;
    width: 30px;
    vertical-align: middle;
  }

  .item-text {
    padding: 10px 0;
    width: calc(100% - 20px);
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .normal-list-view ul li:last-child .item-text {
    border-bottom: none;
  }
</style>
