// import { createRouter } from "/src/router/index.js";
// import store from '/src/store/index.js'

//_createRouter
// createRouter().beforeEach((to, from, next) => {
//     //========================= Menu =============刷新后锚点====================
//     if(createRouter().options.routes[1].children && createRouter().options.routes[1].children.length>0){
//         createRouter().options.routes[1].children.filter((val,index)=>{
//             val.children.filter((item)=>{
//                 if(item.path == to.path){
//                     store.commit('InfoMenuIndex',index)
//                     store.commit('InfoMenuItem',val)
//                 }
//             })
//         })
//     }
//     // if (to.meta.title) {
//     //     document.title = to.meta.title
//     // }
//     //========================= Menu =============刷新后锚点 End====================
//     next();
// })
