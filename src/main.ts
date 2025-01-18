import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import pinia from '@/store'

import 'normalize.css'
import './assets/css/index.less'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入Elmessage和Elloading的css样式文件，否则不会显示
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

// test
// import otRequest from '@/services'
// import type { IDataType } from '@/types/request'
// import type { AxiosResponse } from 'axios'

const app = createApp(App)

// 注册所有的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(pinia)
app.mount('#app')

// test
// otRequest
//   .request<IDataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     showLoading: true,
//     interceptors: {
//       requestInterceptor: (request) => {
//         console.log('【路径拦截器】【请求】 成功')
//         return request
//       },
//       requestInterceptrError: (error) => {
//         console.log('【路径拦截器】【请求】 失败')
//         console.error(error)
//       },
//       responseInterceptor: (response) => {
//         console.log('【路径拦截器】【响应】 成功')
//         return response
//       },
//       responseInterceptorError: (error) => {
//         console.log('【路径拦截器】【响应】 失败')
//         console.error(error)
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
