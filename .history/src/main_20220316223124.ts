import { createApp } from 'vue'
// import { globalRegister } from './global'
import ElementPlus from 'element-plus'
// 引用 element plus 的样式
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
// app.use(globalRegister)
app.use(ElementPlus)
app.use(router)
app.use(store)
setupStore()

app.mount('#app')
