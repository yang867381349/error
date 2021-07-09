import Axios from "/src/Axios/Axios.js";

export const Detail=()=>{
    return Axios('post','info/intellectual/detail')
}

export const Edit=(data=null)=>{
    return Axios('put','info/intellectual/edit',data)
}
