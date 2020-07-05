<template>
  <div>微信登录</div>
</template>
<script>
export default {
  /**
   * 在组件被激活前执行的操作
   */
  async beforeRouteEnter(to, from, next) {
    const code = to.query.code;

    if (code === undefined) {
      console.log(location.origin);
      console.log(to.fullPath);

      location = data.url;
    } else {
      next();
    }
  },
  created() {
    //#ifdef H5
    this.weWebLogin();
    //#endif
    //#ifdef MP-WEIXIN
    this.weMpLogin();
    //#endif
  },
  methods: {
    weWebLogin() {
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