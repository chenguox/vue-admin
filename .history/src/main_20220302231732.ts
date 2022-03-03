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
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单个请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('当个请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})
