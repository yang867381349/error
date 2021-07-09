import Axios from "/src/Axios/Axios.js";

export const List=(data)=>{
    return Axios('post','info/order/list',data)
}

export const Detail=(id,data)=>{
    return Axios('get','info/order/'+id,data)
}
