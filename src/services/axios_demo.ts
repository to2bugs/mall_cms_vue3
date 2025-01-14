/**
 * axios的基本使用
 */
// import axios from 'axios'
//
// axios.get('http://123.207.32.32:8000/home/multidata').then((response) => {
//   console.log(response)
// })

console.log('process.env.NODE_ENV = ', process.env.NODE_ENV)

/*
export let BASE_URL: string = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:6000'
} else {
  BASE_URL = 'http://localhost:5000'
}

 */

console.log('import.meta.env.VITE_BASE_URL: ', import.meta.env.VITE_BASE_URL)
