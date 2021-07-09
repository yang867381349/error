import Axios from "/src/Axios/Axios.js";

// 系统配置
export const Config=(data)=>{
    return Axios('get','api/information/1',data)
}

// 用户信息统计
export const PostCount=(data)=>{
    return Axios('post','info/reply/count',data)
}




