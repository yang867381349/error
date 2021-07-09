import Axios from "/src/Axios/Axios.js";

export const PostDate=(data)=>{
    return Axios('post','list/open',data)
}
export const GetJoin=function(data){
    return Axios('get','list/open',data)
}
