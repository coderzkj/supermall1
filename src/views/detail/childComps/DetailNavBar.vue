<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles"
             :class="{active: index === currentIndex}"
             @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,
    }
  },
  props: {
    newIndex: {
      type: Number
    },
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick', index)
    },
    backClick() {
      // this.$router.go(-1)
      this.$router.back()
    },
  },
  created() {
  }
}
</script>

<style scoped>
  .back img{
    margin-top: 10px;
  }

  .title {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }

  .active {
    color: var(--color-high-text)
  }

</style>
