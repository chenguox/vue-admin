import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

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

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

gxRequest
  .request<DataType>({
    url: '/post',
    method: 'POST',
    interceptors: {
      requestInterceptor: (config) => {
        console.log('单个请求成功的拦截')
        return config
      },
      requestInterceptorCatch: (err) => {
        console.log('单个请求失败的拦截')
        return err
      },
      responseInterceptor: (res) => {
        console.log('单个响应成功的拦截')
        return res
      },
      responseInterceptorCatch: (err) => {
        console.log('单个响应失败的拦截')
        return err
      }
    }
  })
  .then((res) => {
    // 拿到请求结果
    console.log(res)
  })
