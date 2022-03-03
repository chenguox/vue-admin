// service 统一出口
import GXRequest from './request'
import { API_BASE_URL, TIME_OUT } from './request/config'

// 创建 gxRequest 实例
const gxRequest = new GXRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    },
  }
})

export default gxRequest
