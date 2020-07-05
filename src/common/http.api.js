const install = (Vue, vm) => {

    if (process.env.NODE_ENV === "development") {
        Vue.prototype.$u.http.setConfig({
            baseUrl: "http://jddc.server.lezhiqu.com.cn"
        })
    } else if (process.env.NODE_ENV === "production") {
        Vue.prototype.$u.http.setConfig({
            baseUrl: "http://jddc.server.lezhiqu.com.cn"
        })
    }

    let getLoginUrl = (redirect_url, state) => vm.$u.get('/api/Auth/getOfficialAccountLoginUrl')

    // 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
    vm.$u.api = {
        getLoginUrl
    };
}

export default {
    install
}