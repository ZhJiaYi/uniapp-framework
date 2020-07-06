<template>
  <div>微信登录</div>
</template>
<script>
export default {
  onLoad: function(option) {
    //option为object类型，会序列化上个页面传递的参数
    const code = option.code;
    if (code === undefined) {
      //获取微信登录链接
      let url = location.origin + "/#/pages/auth/login";
      this.$u.api.getLoginUrl(url);
      location = url;
    }
    //#ifdef H5
    else {
      this.weWebLogin(code);
    }
    //#endif
  },
  created() {
    //#ifdef MP-WEIXIN
    this.weMpLogin();
    //#endif
  },
  methods: {
    async weWebLogin(code) {
      console.log(code);
      let data = await this.$u.api.getToken(code);
      let token = "zxcvsfaasdfsadf";
      this.setToken(token);
      console.log("h5登录");
    },
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
<style lang="sass">

</style>