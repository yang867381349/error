import Axios from "/src/Axios/Axios.js";

// 评估
export const PostPatentEvaluation=(data)=>{
    return Axios('post','info/evaluation/pingu',data)
}
