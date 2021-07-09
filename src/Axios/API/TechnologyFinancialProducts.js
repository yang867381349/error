import Axios from "/src/Axios/Axios.js";


export const PostTechnologyFinancialProducts=(data)=>{
    return Axios('post','api/products/list',data)
}


export const detail=(id)=>{
    return Axios('get','api/products/'+id)
}

// 塞选项目列表
export const AllList=(data)=>{
    return Axios('post','api/ConditionExtend/list',data)
}
