import Axios from "/src/Axios/Axios.js";

export const PostPropertyRightDemand=(data)=>{
    return Axios('post','system/demand/add',data)
}
