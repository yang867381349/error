import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from '/src/router/index.js'
import { createStore } from '/src/store/index.js'
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";
import 'dayjs/locale/zh-cn.js'
import '/src/styles/element-variables.scss' // 主题定制
export function createApp() {
    const app = createSSRApp(App)
    const router = createRouter()
    const store = createStore()
    app.use(ElementPlus, { locale, zIndex: 3000 })
    app.use(router)
    app.use(store)
    return { app, router, store, ElementPlus }
}
