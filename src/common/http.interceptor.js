// common/http.interceptor.js

// 这里的Vue为Vue对象(非创建出来的实例)，vm为main.js中“Vue.use(httpInterceptor, app)”这一句的第二个参数，
// 为一个Vue的实例，也即每个页面的"this"
// 如果需要了解这个install方法是什么，请移步：https://uviewui.com/components/vueUse.html
const install = (Vue, vm) => {
    // 此为自定义配置参数，具体参数见上方说明
    Vue.prototype.$u.http.setConfig({
        // ......
    });

    // 请求拦截部分，如配置，每次请求前都会执行
    Vue.prototype.$u.http.interceptor.request = (config) => {
        // 引用token
        let token = uni.getStorageSync('token');
        if (!token) {
            uni.login().then(res => {
                if (res[1].errMsg == "login:ok") {
                    //修改请求获取token的api
                    vm.$u.post('/auth/wxMiniLogin', {
                        code: res[1].code
                    }).then(res1 => {
                        console.log(res1);
                        if (res1.code == 200) {
                            uni.setStorageSync('token', res1.data.token)
                            config.header.Authorization = res1.data.token;
                        } else {
                            return false
                        }
                    }).catch(err => {
                        return false
                    })
                } else {
                    return false;
                }
            }).catch(err => {
                return false
            })
        } else {
            config.header.Authorization = token
        }

        return config;
        // 如果return一个false值，则会取消本次请求
        // if(config.url == '/user/rest') return false; // 取消某次请求
    }

    // 响应拦截，判断状态码是否通过
    Vue.prototype.$u.http.interceptor.response = (res) => {
        if (res.code == 500) {
            Vue.prototype.$u.toast(res.message);
        } else {
            return res
        }
    }
}

export default {
    install
}