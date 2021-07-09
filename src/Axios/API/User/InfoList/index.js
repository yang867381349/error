import Axios from "/src/Axios/Axios.js";

export const List=(data)=>{
    return Axios('post','info/reply/list ',data)
}

export const Edit=(data)=>{
    return Axios('put','info/reply/edit',data)
}

