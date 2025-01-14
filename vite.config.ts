// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     },
//   },
// })

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    console.log('当前的mode是', mode) // development
    return {
      // dev 独有配置
      plugins: [vue(), vueDevTools()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      },
      // 定义全局的常量
      define: {
        // 可以在代码中直接使用__APP_VERSION__
        // 前提是在env.d.ts声明其类型
        __APP_VERSION__: JSON.stringify('0.0.1')
      }
    }
  } else {
    console.log('当前的mode是', mode) // production
    // command === 'build'
    return {
      // build 独有配置
      plugins: [vue(), vueDevTools()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      }
    }
  }
})
