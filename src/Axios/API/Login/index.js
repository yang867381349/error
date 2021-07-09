import Axios from "/src/Axios/Axios.js";


// 账号+密码->登录
export const PostPassUser=(data)=>{
    return Axios('post','api/loginByNameAndPwd',data)
}



// 手机号+短信->登录
export const PostLogin=(data)=>{
    return Axios('post','api/login',data)
}

// 手机号+短信+密码->注册
export const PostRegister=(data)=>{
    return Axios('post','api/register',data)
}

// 短信接收
export const PostMessage=(data)=>{
    return Axios('post','api/getVerificationCode',data)
}






