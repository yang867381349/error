import {
    createMemoryHistory,
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*/*.vue')
// console.log(pages)
const routes = Object.keys(pages).map((path) => {
    // console.log(path)
    const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
    console.log(name,pages[path])
    return {
        path: name,
        component: pages[path] // () => import('./pages/*.vue')
    }
})
// console.log(routes)

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         hidden:true,
//         component: () => import('/src/pages/Home/index.vue'),
//         meta:{
//             name:'Home',
//             title:"首页"
//         }
//     }
// ]

export function createRouter() {
    return _createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    })
}
