import axios from 'axios'
import { seedPrefix } from './app'
// 根据Token获取用户信息
export const getUserInfoByToken = params => { return axios.post(`${seedPrefix}/api/tokens/mine`).then(res => res.data) }
// 更新Token
export const refreshToken = params => { return axios.post(`${seedPrefix}/api/tokens/${params}`).then(res => res.data) }
