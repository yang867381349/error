import Axios from "/src/Axios/Axios.js";

export const Detail=()=>{
    return Axios('post','info/financial/detail')
}

export const Edit=(data=null)=>{
    return Axios('put','info/financial/edit',data)
}
