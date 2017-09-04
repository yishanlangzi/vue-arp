import axios from './http'
import { seedPrefix } from './app'
// 获取个人信息接口
export const queryStaffInfo = params => { return axios.post(`${seedPrefix}/staff/queryStaffInfoByUserId`).then(res => res.data) }
// 更新个人信息接口
export const updateStaff = params => { return axios.post(`${seedPrefix}/staff/updateCurrentLoginInfo`, params).then(res => res.data) }
// 获取首页新闻信息接口
export const vaildPsw = params => { return axios.post(`${seedPrefix}/login/validPassword`, params).then(res => res.data) }
// 更新个人密码接口
export const updatePsw = params => { return axios.post(`${seedPrefix}/login/updatePassword`, params).then(res => res.data) }
// 获取登录日志接口
export const getWorklog = params => { return axios.post(`${seedPrefix}/loginLog/queryList?orderKey=&${params}`, {}).then(res => res) }
// 获取人员头像及信息接口
export const getUserInfoPhoto = params => { return axios.post(`${seedPrefix}/staff/queryUserPhotos`).then(resp => resp.data) }
// 获取待办接口
export const getTodos = params => { return axios.get(`todos/todos`).then(resp => resp.data) }
export const getBoxs = params => { return axios.get(`todos/boxs`).then(resp => resp.data) }
// 取2.4 officel代办
export const getOfficelTodos = params => { return axios.get(`todos/arp2.4/official`).then(resp => resp.data) }
// 取2.4代办
export const getOtherTodos = params => { return axios.get(`todos/arp2.4/other`).then(resp => resp.data) }
