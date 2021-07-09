import Axios from "/src/Axios/Axios.js";
// 知产数据服务
export const IntellectualPropertyDataService=(data)=>{
    return Axios('post','api/ipoCamp/addPortal',data)
}
