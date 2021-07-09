// import { createRouter, createWebHistory } from 'vue-router'
import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     hidden:true,
//     component: () => import('/src/views/Home/index.vue'),
//     meta:{
//       name:'Home',
//       title:"首页"
//     }
//   },
//   {
//     path: '/me',
//     name: 'user',
//     component: ()=> import('/src/views/User/Layout.vue'),
//     hidden:false,
//     meta:{
//       name:'user',
//       title:"个人中心"
//     },
//     children: [
//       {
//         path: '/me/Personal',
//         component: ()=>import('/src/views/User/Personal/Layout.vue'),
//         name: 'Personal',
//         hidden:false,
//         alwaysShow:true,
//         meta:{
//           name:'Personal',
//           icon:'icon-cp-weidu',
//           OpenClose:false,
//           title:"工作台"
//         },
//         children: [
//           {
//             path: '/me/PersonalCore',
//             name: 'PersonalCore',
//             hidden:false,
//             component:  () => import('/src/views/User/Personal/PersonalCore.vue'),
//             meta:{
//               name:'PersonalCore',
//               OpenClose:false,
//               title:"我的工作台"
//             }
//           }
//         ]
//       },
//       {
//         path: '/me/Enterprise',
//         component: ()=>import('/src/views/User/Enterprise/Layout.vue'),
//         name: 'Enterprise',
//         hidden:false,
//         alwaysShow:true,
//         meta:{
//           name:'Enterprise',
//           icon:'icon-qiye',
//           OpenClose:false,
//           title:"企业"
//         },
//         children: [
//           {
//             path: '/me/EnterpriseInformation',
//             name: 'EnterpriseInformation',
//             hidden:false,
//             component:  () => import('/src/views/User/Enterprise/Information.vue'),
//             meta:{
//               name:'EnterpriseInformation',
//               OpenClose:false,
//               title:"企业信息"
//             }
//           },
//           {
//             path: '/me/EnterpriseFinance',
//             name: 'EnterpriseFinance',
//             hidden:false,
//             component:  () => import('/src/views/User/Enterprise/Finance.vue'),
//             meta:{
//               name:'EnterpriseFinance',
//               OpenClose:false,
//               title:"财务信息"
//             }
//           },
//           {
//             path: '/me/EnterpriseIP',
//             name: 'EnterpriseIP',
//             hidden:false,
//             component:  () => import('/src/views/User/Enterprise/IP.vue'),
//             meta:{
//               name:'EnterpriseIP',
//               OpenClose:false,
//               title:"知产信息"
//             }
//           },
//           {
//             path: '/me/EnterpriseQualifications',
//             name: 'EnterpriseQualifications',
//             hidden:false,
//             component:  () => import('/src/views/User/Enterprise/Qualification.vue'),
//             meta:{
//               name:'EnterpriseQualifications',
//               OpenClose:false,
//               title:"资质信息"
//             }
//           },
//         ]
//       },
//       {
//         path: '/me/Order',
//         component: ()=>import('/src/views/User/Order/Layout.vue'),
//         name: 'Order',
//         hidden:false,
//         alwaysShow:true,
//         meta:{
//           name:'Order',
//           icon:'icon-yiwancheng',
//           OpenClose:false,
//           title:"订单"
//         },
//         children: [
//           {
//             path: '/me/OrderList',
//             name: 'OrderList',
//             hidden:false,
//             component: () => import('/src/views/User/Order/OrderList.vue'),
//             meta:{
//               name:'OrderList',
//               OpenClose:false,
//               title:"订单列表"
//             }
//           },
//           {
//             path: '/me/OrderDetail/:id',
//             name: 'OrderDetail',
//             hidden:true,
//             component: () => import('/src/views/User/Order/OrderDetail.vue'),
//             meta:{
//               name:'OrderDetail',
//               OpenClose:false,
//               title:"订单详情"
//             }
//           },
//         ]
//       },
//       {
//         path: '/me/Info',
//         component: ()=>import('/src/views/User/Info/Layout.vue'),
//         name: 'Info',
//         hidden:false,
//         alwaysShow:true,
//         meta:{
//           name:'Info',
//           icon:'icon-message',
//           OpenClose:false,
//           title:"消息"
//         },
//         children: [
//           {
//             path: '/me/InfoList',
//             name: 'InfoList',
//             hidden:false,
//             component: () => import('/src/views/User/Info/InfoList.vue'),
//             meta:{
//               name:'InfoList',
//               OpenClose:false,
//               title:"信息列表"
//             }
//           }
//         ]
//       }
//     ]
//   },
//   {
//     path: '/UserProtocolAndPrivacyProtection',
//     name: 'UserProtocolAndPrivacyProtection',
//     hidden:true,
//     meta:{
//       name:'UserProtocolAndPrivacyProtection',
//       title:"用户协议与隐私保护"
//     },
//     component: () => import('/src/views/UserProtocolAndPrivacyProtection/index.vue')
//   },
//   {
//     path: '/PlatformProtocol',
//     name: 'PlatformProtocol',
//     hidden:true,
//     meta:{
//       name:'PlatformProtocol',
//       title:"平台协议"
//     },
//     component: () => import('/src/views/PlatformProtocol/index.vue')
//   },
//   {
//     path: '/Disclaimers',
//     name: 'Disclaimers',
//     hidden:true,
//     meta:{
//       name:'Disclaimers',
//       title:"免责声明"
//     },
//     component: () => import('/src/views/Disclaimers/index.vue')
//   },
//   {
//     path: '/PropertyRight',
//     name: 'PropertyRight',
//     hidden:true,
//     meta:{
//       name:'PropertyRight',
//       title:"专利交易"
//     },
//     component: () => import('/src/views/PropertyRight/Patent.vue'),
//     children:[
//       {
//         path: '/PropertyRight',
//         name: 'PropertyRight',
//         hidden:true,
//         meta:{
//           name:'PropertyRight',
//           title:"专利列表"
//         },
//         component: () => import('/src/views/PropertyRight/PatentDetail/PatentList.vue')
//       },
//       {
//         path: '/PropertyRightDetail/:id',
//         name: 'PropertyRightDetail',
//         hidden:true,
//         meta:{
//           name:'PropertyRight',
//           title:"专利详情"
//         },
//         component: () => import('/src/views/PropertyRight/PatentDetail/Detail.vue')
//       }
//     ]
//   },
//   {
//     path: '/PatentEvaluation',
//     name: 'PatentEvaluation',
//     hidden:true,
//     meta:{
//       name:'PatentEvaluation',
//       title:"专利评估"
//     },
//     component: () => import('/src/views/PropertyRight/Patent.vue'),
//     children:[
//       {
//         path: '/PatentEvaluation',
//         name: 'PatentEvaluation',
//         hidden:true,
//         meta:{
//           name:'PatentEvaluation',
//           title:"专利评估"
//         },
//         component: () => import('/src/views/PatentEvaluation/PatentEvaluation.vue')
//       }
//     ]
//   },
//   {
//     path: '/IntellectualPropertyDataService',
//     name: 'IntellectualPropertyDataService',
//     hidden:true,
//     meta:{
//       name:'IntellectualPropertyDataService',
//       title:"知产数据服务"
//     },
//     component: () => import('/src/views/IntellectualPropertyDataService/IntellectualPropertyDataService.vue')
//   },
//   {
//     path: '/zixun',
//     name: 'zixun',
//     hidden:true,
//     meta:{
//       name:'zixun',
//       title:"资讯中心"
//     },
//     component: () => import('/src/views/zixun/index.vue')
//   },
//   {
//     path: '/About',
//     name: 'About',
//     hidden:true,
//     meta:{
//       name:'About',
//       title:"关于我们"
//     },
//     component: () => import('/src/views/About/About.vue')
//   },
//   {
//     path: '/rzcp',
//     name: 'rzcp',
//     hidden:true,
//     meta:{
//       name:'Products',
//       title:"融资产品"
//     },
//     component: () => import('/src/views/IntellectualPropertyFinancialProducts/Layout.vue'),
//     children: [
//       {
//         path: '/rzcp/:id',
//         name: 'rzcp',
//         hidden:true,
//         meta:{
//           name:'Products',
//           title:"融资产品"
//         },
//         component: () => import('/src/views/IntellectualPropertyFinancialProducts/components/IntellectualPropertyFinancialProducts.vue')
//       },
//       {
//         path: '/rzcp-dt/:id',
//         name: 'ProductDetail',
//         hidden:true,
//         meta:{
//           name:'Products',
//           title:"融资产品详情"
//         },
//         component: () => import('/src/views/IntellectualPropertyFinancialProducts/components/IntellectualPropertyFinancialProductsDetail.vue')
//       },
//       {
//         path: '/FormFinancing',
//         name: 'FormFinancing',
//         hidden:true,
//         meta:{
//           name:'Products',
//           title:"融资产品表单"
//         },
//         component: () => import('/src/views/IntellectualPropertyFinancialProducts/components/FormFinancing.vue')
//       }
//     ]
//   },
//   {
//     path: '/IpoGrowthCamp',
//     name: 'IpoGrowthCamp',
//     hidden:true,
//     meta:{
//       name:'IpoGrowthCamp',
//       title:"IPO成长营"
//     },
//     component: () => import('/src/views/IpoGrowthCamp/Layout.vue'),
//     children:[
//       {
//         path: '/IpoGrowthCamp',
//         name: 'IpoGrowthCamp',
//         hidden:true,
//         component:() => import('/src/views/IpoGrowthCamp/components/IpoGrowthCamp.vue'),
//         meta:{
//           title:'知识产权融资',
//           name:'IpoGrowthCamp'
//         }
//       },
//       {
//         path: '/IpoGrowthCampDetail/:id',
//         name: 'IpoGrowthCampDetail',
//         hidden:true,
//         component: () =>import('/src/views/IpoGrowthCamp/components/IpoGrowthCampDetail.vue'),
//         meta:{
//           title:'IPO成长营活动-详情',
//           name:'IpoGrowthCamp'
//         }
//       }
//     ]
//   }
// ]
const routes = [
  {
    path: '/ewqewqewq',
    name: 'Layout',
    redirect: '/',
    hidden:true,
    component: () => import('/src/views/About/About.vue'),
    meta:{
      name:'Layout',
      title:"Layout"
    },
    children:[
      {
        path: '/',
        name: 'Home',
        hidden:true,
        component: () => import('/src/views/Home/index.vue'),
        meta:{
          name:'Home',
          title:"首页"
        }
      }
    ]
  },
]
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior() {
//     // 始终滚动到顶部
//     return { top: 0 }
//   },
// })
//
// export default router

// const pages = import.meta.glob('.././views/*/*.vue')
// const routes = Object.keys(pages).map((path) => {
//   const name = path.match(/\.\/views(.*)\.vue$/)[1].toLowerCase()
//   return {
//     path: name === '/home/index' ? '/' : name,
//     component: pages[path] // () => import('./pages/*.vue')
//   }
// })



export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
    // scrollBehavior() {
    //   // 始终滚动到顶部
    //   return { top: 0 }
    // },
  })
}
