import Axios from "/src/Axios/Axios.js";

export const Detail=()=>{
    return Axios('post','info/certification/detail')
}

export const Edit=(data=null)=>{
    return Axios('put','info/certification/edit',data)
}

export const Submit=(data=null)=>{
    return Axios('post','info/certification/submit',data)
}
