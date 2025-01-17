import OTRequest from './request/otRequest.ts'
import { baseURL, timeout } from '@/services/request/config.ts'

export default new OTRequest({
  baseURL,
  timeout,
  showLoading: true,
  interceptors: {
    requestInterceptor(config) {
      console.log('【对象拦截器】【请求】 成功')
      return config
    },
    requestInterceptrError(error) {
      console.log('【对象拦截器】【请求】 失败')
      return error
    },
    responseInterceptor(response) {
      console.log('【对象拦截器】【响应】 成功')
      return response
    },
    responseInterceptorError(error) {
      console.log('【对象拦截器】【响应】 失败')
      return error
    }
  }
})
