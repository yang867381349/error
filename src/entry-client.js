import { createApp } from './main'
const { app, router, store } = createApp()
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn.js'
import 'dayjs/locale/zh-cn.js'
import '/src/styles/element-variables.scss' // 主题定制
router.isReady().then(() => {
    app.use(ElementPlus, { locale, zIndex: 3000 })
    app.use(store)
    app.mount('#app')
})
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
