<template>
  <div class="account-info">
    <div class="account-overage">
      <span class="overage-number">0.00</span>
      <span>元</span>
      <div class="overage-text">我的余额</div>
    </div>
    <div class="account-discount">
      <span class="discount-number">0</span>
      <span>个</span>
      <div class="discount-text">我的优惠</div>
    </div>
    <div class="account-integral">
      <span class="integral-number">0</span>
      <span>分</span>
      <div class="integral-text">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountInfo"
}
</script>

<style scoped>
  .account-info {
    display: flex;
    background-color: #fff;
  }
  .account-overage,
  .account-discount,
  .account-integral {
    flex: 1;
    padding: 10px 0;
    text-align: center;
    font-size: 13px;
    border-right: 1px solid rgba(100, 100, 100, .1);
  }

  .overage-number,
  .discount-number,
  .integral-number {
    font-size: 18px;
    font-weight: 700;
    color: #ff5f3e;
  }

  .overage-text,
  .discount-text,
  .integral-text {
    padding-top: 5px;
  }
</style>
