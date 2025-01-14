import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import pinia from '@/store'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入Elmessage和Elloading的css样式文件，否则不会显示
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

// 注册所有的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(pinia)
app.mount('#app')
