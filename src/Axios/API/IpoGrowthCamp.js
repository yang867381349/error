import Axios from "/src/Axios/Axios.js";

// IPO成长营
export const PostIpoGrowthCamp=(data)=>{
    return Axios('post','api/ipoCamp/addPortal',data)
}


// 列表
export const PostList=(data)=>{
    return Axios('post','api/ipo/list',data)
}

// 详情
export const SeeDetail=(id)=>{
    return Axios('get','api/ipo/'+id)
}
