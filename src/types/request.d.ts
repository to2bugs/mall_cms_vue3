import type {
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'

export interface IOTRequestInterceptor<REUEST_CONFIG, RESPONSE> {
  requestInterceptor?: (
    config: REUEST_CONFIG
  ) => REUEST_CONFIG | Promise<REUEST_CONFIG>
  requestInterceptrError?: (error: any) => any
  responseInterceptor?: (config: RESPONSE) => RESPONSE | Promise<RESPONSE>
  responseInterceptorError?: (error: any) => any
}

export interface IOTRequestRequestConfig<
  T = InternalAxiosRequestConfig,
  D = AxiosResponse
> extends CreateAxiosDefaults {
  showLoading?: boolean
  interceptors?: IOTRequestInterceptor<T, D>
}
