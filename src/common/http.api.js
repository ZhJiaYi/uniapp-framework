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

    function get(url, params) {
        return new Promise((resolve, reject) => {
            vm.$u.get(url, params).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    function post(url, params) {
        return new Promise((resolve, reject) => {
            vm.$u.post(url, params).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    //利用code获取token
    let getToken = (code) => post('/api/Auth/officialAccountLogin', {
        code: code
    })

    // 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
    vm.$u.api = {
        getToken
    };
}

export default {
    install
}