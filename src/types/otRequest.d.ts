/**
 * 定义OTRequest中要使用的类型
 */
import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

export interface IInterceptor {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorError?: (error: any) => any
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorError?: (error: any) => any
}

export interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IInterceptor
}
