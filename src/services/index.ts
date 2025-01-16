/**
 *
 */
import OTRequest from '@/services/request'
import { baseUrl, timeout } from '@/services/request/config.ts'

// 定义全局配置
const otRequest = new OTRequest({
  baseURL: baseUrl,
  timeout,
  interceptors: {
    requestInterceptor(config) {
      console.log('【请求拦截器】对象【成功】版本')
      return config
    },
    responseInterceptorError(error) {
      console.log('【请求拦截器】对象【失败】版本')
      return error
    },
    responseInterceptor(response) {
      console.log('【响应拦截器】对象【成功】版本')
      return response
    },
    requestInterceptorError(error) {
      console.log('【响应拦截器】对象【失败】版本')
      return error
    }
  }
})

export default otRequest
