import Axios from "/src/Axios/Axios.js";


// 工作台-详情
export const Detail=(data)=>{
    return Axios('post','info/order/count',data)
}
