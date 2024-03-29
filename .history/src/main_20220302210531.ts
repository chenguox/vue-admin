import { createApp } from 'vue'
import { globalRegister } from './global'

import App from './App.vue'

import router from './router'
import store from './store'

import gxRequest from './service'

const app = createApp(App)


// 注册element-plus/其他
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')

gxRequest.request({
  url: '/post',
  method: 'POST',
  
})
