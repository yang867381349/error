import Axios from "/src/Axios/Axios.js";

export const Detail=()=>{
    return Axios('post','info/essential/detail')
}

export const Edit=(data=null)=>{
    return Axios('put','info/essential/edit',data)
}

export const ProductsList=(data=null)=>{
    return Axios('post','api/products/AllList',data)
}

