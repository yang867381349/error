import Axios from "/src/Axios/Axios.js";

export const IntelFrom=(data)=>{
    return Axios('post','info/demand',data)
}

export const IntelFromPost=(data)=>{
    return Axios('post','api/table/list',data)
}

export const IntelFromAddress=(data)=>{
    return Axios('post','api/area/list',data)
}

export const FinancingCount=(data)=>{
    return Axios('post','api/area/count',data)
}
