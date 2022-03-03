import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { GXRequestInterceptors, GXRequestConfig } from './type'

class GXRequest {
  instance: AxiosInstance
  interceptors: GXRequestInterceptors

  constructor(config: GXRequestConfig) {
    this.instance = axios.create(config)

    // 保存对应实例的拦截
    this.interceptors = config.interceptors

    // 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例的拦截器: 请求成功拦截')
        return config
      },
      (err) => {
        console.log('所有实例的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例的拦截器: 响应成功拦截')
        return res
      },
      (err) => {
        console.log('所有实例的拦截器: 响应失败拦截')
        return err
      }
    )
  }

  request(config: GXRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default GXRequest
