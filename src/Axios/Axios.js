import axios from "axios";
import Qs from 'qs';
import { createRouter } from "/src/router/index.js";
// import store from '/src/store/index.js'
import { ElNotification } from 'element-plus';
// 创建 axios 实例
const service = axios.create({
    //配置项
    //==============================判断URL配置==============================
    // 根据 process.env.NODE_ENV 区分状态，切换不同的 baseURL
    baseURL: import.meta.env.MODE == 'development'?'/':'https://www.cnipv.cn/foo',
    //==============================统一设置请求头==============================
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8',  // json 数据发送
            // 'Content-Type': 'application/x-www-form-urlencoded'  // fromDate 数据发送
            // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
        },
        put: {
            'Content-Type': 'application/json;charset=utf-8',  // json 数据发送
            // 'Content-Type': 'application/x-www-form-urlencoded'  // fromDate 数据发送
            // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
        },
    },


    //==============================跨域、超时、响应码处理==============================
    // 跨域请求时是否需要使用凭证
    withCredentials: false,
    // 请求 30s 超时
    timeout: 30000,
    validateStatus () {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true
    },



    //==============================请求、响应处理==============================

    // 在向服务器发送请求前，序列化请求数据
    transformRequest: [ (data)=> {
        data = JSON.stringify(data)
        return data
    }],
    // 在传递给 then/catch 前，修改响应数据
    transformResponse: [ (data)=> {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data)
        }
        return data
    }]
})


//==============================请求拦截器==============================
service.interceptors.request.use((config) => {
    if(localStorage.getItem('token') !== null){
        config.headers['token'] = localStorage.getItem('token')
    }
    return config
}, (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.message = '服务器异常，请联系管理员！'
    return error
})
//==============================响应拦截器==============================
service.interceptors.response.use((response) => {
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
        // 处理http错误，抛到业务代码
        msg = showStatus(status)
        if (typeof response.data === 'string') {
            response.data = {msg}
        } else {
            response.data.message = msg
        }
    }
    // if(response.data.code>=300 || response.data.code<200){
    //     ElNotification({
    //         title: '警告',
    //         message: response.data.message,
    //         type: 'error'
    //     });
    // }
    // if(response.data.code == '200'){
    //     //200 请求成功。一般用于GET与POST请求
    //     //201 已创建。成功请求并创建了新的资源
    //     //=====================更新失效token========================
    //     // localStorage.setItem('token', response.data.token);
    //     //=====================更新失效token========================
    // }
    // response.data.sameSite

    if(response.data.code == '404') {
        ElNotification({
            title: '错误',
            message: response.data.message,
            type: 'error'
        });
        createRouter().back();
    }
    if(response.data.code == '401') {
        localStorage.setItem('token', '');
        localStorage.setItem('phone', '');
        // store.commit('tokenInfo','');
        // store.commit('phoneInfo','');
        ElNotification({
            title: '错误',
            message: response.data.message,
            type: 'error'
        });
        createRouter().push({path: '/'});
    }
    return response;
}, (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.message = '请求超时或服务器异常，请检查网络或联系管理员！'
    return error
})


const showStatus = (status) => {
    let message = ''
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            message = '未授权，请重新登录(401)'
            break
        case 403:
            message = '拒绝访问(403)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}

// 返回出去已实现接口调用
export default (method,url,data= null)=>{
    method = method.toLowerCase();
    if (method == 'post') {
        let PostDate = Qs.parse(data);
        return service.post(url,PostDate)
    } else if (method == 'get') {
        // 通过Qs插件把对象转换成字符串
        let Theaders = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
        return service.get(url,{params:Qs.parse(data)},{headers:Theaders})
    } else if (method == 'delete') {
        return service.delete(url,{params:data})
    }else if(method == 'put'){
        return service.put(url,data)
    }else{
        console.error('未知的method'+method)
        return false
    }
}
