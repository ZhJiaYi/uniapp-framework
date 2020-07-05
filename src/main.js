import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
//引入拦截器
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)
//绑定api接口
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)
app.$mount()