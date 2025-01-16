/**
 * 根据环境的不同，配置不同的属性
 */
const env = import.meta.env.NODE_ENV ?? 'development'
let baseUrl = ''
const timeout = 6000

if (env === 'development') {
  baseUrl = 'http://123.207.32.32:8000'
} else if (env === 'production') {
  baseUrl = 'http://123.207.32.32:9000'
} else if (env === 'test') {
  baseUrl = 'http://123.207.32.32:5000'
}

export { baseUrl, timeout }
