import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface GXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface GXRequestConfig extends AxiosRequestConfig {
  interceptors?: GXRequestInterceptors
}
