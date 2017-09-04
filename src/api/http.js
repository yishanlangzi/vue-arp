import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../router/index'
import { baseURL } from '../config'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = baseURL // new.arp.cn
// axios.defaults.baseURL = 'http://159.226.194.34/'
// http request 拦截器
axios.interceptors.request.use(
    config => {
      if (store.state.token) {
        config.headers.Authorization = `Bearer ` + store.state.token.token
        // axios.defaults.headers.common['Authorization'] = `Bearer ` + store.state.token
        // alert('http - token' + store.state.token)
        // alert('获取到的token' + config.headers.Authorization)
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })

// http response 拦截器
axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            store.store.commit(types.LOGOUT)
            router.replace({
              path: 'login',
              query: {redirect: router.currentRoute.fullPath}
            })
        }
      }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      return Promise.reject(error.response.data)
    })

export default axios
