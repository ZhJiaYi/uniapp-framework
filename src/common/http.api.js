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

    //获取微信登录链接
    let getLoginUrl = (redirect_url) => vm.$u.get('/api/Auth/getOfficialAccountLoginUrl', {
        redirect_url: redirect_url
    })
    //利用code获取token
    let getToken = (code) => vm.$u.post('/api/Auth/officialAccountLogin', {
        code: code
    })

    // 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
    vm.$u.api = {
        getLoginUrl,
        getToken
    };
}

export default {
    install
}