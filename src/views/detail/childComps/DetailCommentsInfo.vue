<template>
  <div class="comments-info">
    <div class="comments-head clear-fix">
      <div class="left">用户评价</div>
      <div class="comments-more right">更多</div>
    </div>
    <div v-if="commentsInfo.length !== 0"
         class="comments-item clear-fix"
         v-for="(item, index) in commentsInfo"
         :key="index">
      <div class="item-user">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="item-content">{{item.content}}</div>
      <div class="item-style">
        <span class="item-data">{{item.created | showDate}}</span>
        <span>{{item.style}}</span>
      </div>
      <div class="item-images" v-for="image in item.images">
        <img :src="image" alt="">
      </div>
    </div>
    <div v-else>暂时没有评论呦~</div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"

export default {
  name: "DetailCommentsInfo",
  props: {
    commentsInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }

}
</script>

<style scoped>
  .comments-info {
    padding: 20px 15px;
    font-size: 14px;
    border-top: 5px solid rgba(100, 100, 100, .1);
  }
  .comments-head {
    padding-bottom: 10px;
    font-size: 15px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .comments-more {
    position: relative;
    padding-right: 15px;
  }
  .comments-more::after {
    position: absolute;
    top: 4px;
    right: 0;
    content:'';
    height: 10px;
    width: 10px;
    border-top: 1px solid #666;
    border-right: 1px solid #666;
    transform: rotate(45deg);
  }

  .comments-item .item-user {
    padding: 10px 0;
  }
  .comments-item .item-user img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    vertical-align: middle;
  }

  .comments-item .item-user span {
    padding-left: 5px;
  }

  .comments-item .item-style {
    padding: 10px 0;
    font-size: 12px;
    color: #777;
  }
  .item-style .item-data {
    padding-right: 5px;
  }
  .comments-item .item-images img {
    float: left;
    margin-right: 5px;
    height: 70px;
    width: 70px;
  }


</style>
