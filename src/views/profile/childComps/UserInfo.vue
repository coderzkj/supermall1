<template>
  <div class="user-info">
    <div class="user-img"><img src="~assets/img/profile/avatar.svg" alt=""></div>
    <div class="user-personal-info">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂未绑定手机号码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
  .user-info {
    display: flex;
    padding: 10px;
    color: #fff;
    background-color: var(--color-tint);
  }

  .user-img img {
    width: 70px;
    height: 70px;
    vertical-align: middle;
  }

  .user-personal-info {
    position: relative;
    padding: 15px;
    width: calc(100% - 70px);
  }

  .login {
    padding-left: 5px;
  }

  .phone img {
    width: 20px;
    height: 30px;
    vertical-align: middle;
  }
  .phone span {
    font-size: 13px;
  }

  .user-personal-info::after {
    content: "";
    display: block;
    position: absolute;
    top: 30px;
    right: 10px;
    height: 10px;
    width: 10px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    overflow: hidden;
    transform: rotate(45deg);
  }
</style>
