<template>
  <div id="profile">
    <nav-bar class="bav-bar"><div class="my-profile" slot="center">我的</div></nav-bar>
    <user-info/>
    <account-info/>
    <normal-list-view :data-list="orderList"/>
    <normal-list-view :data-list="serviceList"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import UserInfo from "@/views/profile/childComps/UserInfo"
import AccountInfo from "@/views/profile/childComps/AccountInfo"
import NormalListView from "@/views/profile/childComps/NormalListView"
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    NormalListView
  },
  data() {
    return {
      orderList: [
        {icon: 'message.svg', text: '我的消息'},
        {icon: 'pointer.svg', text: '积分商城'},
        {icon: 'vip.svg', text: '会员卡'},
      ],
      serviceList: [
        {icon: 'shopping.svg', text: '我的购物车'},
        {icon: 'cart.svg', text: '下载购物APP'},
      ]
    }
  }
}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .bav-bar {
    color: #fff;
    background-color: var(--color-tint);
    border-bottom: none;
  }

  .my-profile {
    font-size: 18px;
  }


</style>
