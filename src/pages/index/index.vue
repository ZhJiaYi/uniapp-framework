<template>
  <view class="content">
    <view>
      <text class="title">{{title}}</text>
      <u-button type="success">成功按钮</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello"
    };
  },
  created() {},
  methods: {
    weMpLogin() {
      let token = "asdfsadfsadf";
      this.setToken(token);
      console.log("小程序登录");
    },
    setToken(token) {
      this.$u.http.setConfig({
        header: {
          Authorization: token
        }
      });
    }
  }
};
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
