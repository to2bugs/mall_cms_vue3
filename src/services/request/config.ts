/**
 *
 */

let baseURL: string = ''
const timeout = 60 * 1000

if (import.meta.env.MODE === 'development') {
  baseURL = 'http://123.207.32.32:8000'
} else if (import.meta.env.MODE === 'production') {
  baseURL = ''
} else if (import.meta.env.MODE === 'test') {
  baseURL = ''
}

export { baseURL, timeout }
