/**
 *
 */
import axios from 'axios'
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type { IOTRequestConfig, IOTRequestInterceptor } from '@/types/request'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

class OTRequest {
  instance: AxiosInstance
  interceptors?: IOTRequestInterceptor<
    InternalAxiosRequestConfig,
    AxiosResponse
  >
  showLoading: boolean
  loadingInstance: LoadingInstance

  constructor(config: IOTRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true

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
        if (this.showLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            background: 'rgba(0, 0, 0, 0.6)',
            text: '正在请求数据中......'
          })
        }
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
        if (this.showLoading) {
          this.loadingInstance.close()
        }
        return iresponse.data
      },
      (error: any) => {
        console.log('【全局拦截器】【响应】 失败')
        if (this.showLoading) {
          this.loadingInstance.close()
        }
        return error
      }
    )
  }

  // 定义request方法
  // request(config: AxiosRequestConfig) {
  //   return this.instance.request(config)
  // }
  request<T>(config: IOTRequestConfig<InternalAxiosRequestConfig, T>) {
    // 1. 先执行该路径上定义的请求拦截器
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    if (config.showLoading === false) {
      this.showLoading = false
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T, any>(config)
        .then((result: T) => {
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

  //
  get<T>(config: IOTRequestConfig<InternalAxiosRequestConfig, T>) {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }

  post<T>(config: IOTRequestConfig<InternalAxiosRequestConfig, T>) {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }

  delete<T>(config: IOTRequestConfig<InternalAxiosRequestConfig, T>) {
    return this.request<T>({
      ...config,
      method: 'DELETE'
    })
  }

  patch<T>(config: IOTRequestConfig<InternalAxiosRequestConfig, T>) {
    return this.request<T>({
      ...config,
      method: 'PATCH'
    })
  }
}

export default OTRequest
