/**
 *  封装axios
 *  定义OTRequest类
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { IInterceptor, IRequestConfig } from '@/types/otRequest'

class OTRequest {
  instance: AxiosInstance
  interceptors: IInterceptor

  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors ?? {}

    // axios的实例中注册拦截器
    // 1. 注册某个OTRequest实例中定义的拦截器
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorError
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorError
    )

    // 2. 注册所有请求的拦截器，可以理解为全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('【请求拦截器】ALL【成功】版本')
        return config
      },
      (error) => {
        console.log('【请求拦截器】ALL【失败】版本')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        console.log('【响应拦截器】ALL【成功】版本')
        return response.data
      },
      (error) => {
        console.log('【响应拦截器】ALL【失败】版本')
        return error
      }
    )
  }

  request(config: IRequestConfig) {
    return this.instance.request(config)
  }
}

export default OTRequest
