<template>
  <div class="check-button"
       :class="{colorBtn: isChecked}"></div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      //如果一个组件想使用本地的props数据，最好定义一个本地的data
      checked: this.isChecked,
    }
  }
}
</script>

<style scoped>
  .check-button {
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .colorBtn {
    background: var(--color-tint) url('~assets/img/cart/tick.svg') 0 0/100%;
    border: 0;
  }
</style>
