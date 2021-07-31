<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="size-info" v-for="(item, index) in paramsInfo.size" :key="index">
      <tr v-for="(tr, indey) in item" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="item in paramsInfo.info">
        <td class="info-key">{{item.key}}</td>
        <td class="info-value">{{item.value}}</td>
      </tr>
    </table>
    <div v-if="paramsInfo.image.length !== 0" class="image-info">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props: {
      paramsInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }

</script>

<style scoped>
  .params-info {
    padding: 20px 15px;
    border-top: 5px solid rgba(100, 100, 100, .1);
    font-size: 14px;
  }

  .params-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .params-info table td {
    height: 42px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .size-info tr:last-child {
    border-bottom: 2px solid rgba(100, 100, 100, .1);
  }

  .info .info-key {
    /*右侧value会挤压key，指定宽度避免*/
    width: 92px;
  }

  .info .info-value {
    color: var(--color-high-text)
  }

  .image-info img {
    width: 100%;
  }

</style>
