/**
 *
 */
import axios from 'axios'
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  IOTRequestRequestConfig,
  IOTRequestInterceptor
} from '@/types/request'

class OTRequest {
  instance: AxiosInstance
  interceptors?: IOTRequestInterceptor<
    InternalAxiosRequestConfig,
    AxiosResponse
  >

  constructor(config: IOTRequestRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 使用对象中的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptrError
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorError
    )

    // 使用全局的拦截器
    this.instance.interceptors.request.use(
      (iconfig) => {
        console.log('【全局拦截器】【请求】 成功')
        return iconfig
      },
      (error: any) => {
        console.log('【全局拦截器】【请求】 失败')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (iresponse) => {
        console.log('【全局拦截器】【响应】 成功')
        return iresponse.data
      },
      (error: any) => {
        console.log('【全局拦截器】【响应】 失败')
        return error
      }
    )
  }

  // 定义request方法
  // request(config: AxiosRequestConfig) {
  //   return this.instance.request(config)
  // }
  request(config: IOTRequestRequestConfig) {
    // 1. 先执行该路径上定义的请求拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((result) => {
          // 2. 获取到数据，在返回数据之前，执行该路径上定义的响应拦截器
          if (config.interceptors?.responseInterceptor) {
            result = config.interceptors.responseInterceptor(result)
          }

          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default OTRequest
