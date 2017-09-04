import axios from 'axios'
export const carPrefix = 'vehicle'
// 申请用车
export const applicationCar = params => { return axios.post(`${carPrefix}/icas-example/carUsageReq`, params).then(res => res.data) }
// 综合查询我的用车申请
export const queryVehicleMessage = params => { return axios.get(`${carPrefix}/carUsageReq${params}`).then(res => res.data) }
// 获取用车记录后台接口
export const getVehicleRecord = params => { return axios.get(`${carPrefix}/carUsageReq${params}`).then(res => res.data) }
// 保存、更新用车申请
export const saveVehicle = params => { return axios.post(`${carPrefix}/carUsageReq`, params).then(res => res.data) }
// 待安排车辆列表
export const getArrangeList = params => { return axios.get(`${carPrefix}/carUsageReq/queryCurInfoBySuper?orderKey=&page=1&pageSize=50&state=approving`).then(res => res.data) }
// 备用url
export const getMyCarApplyList = params => { return axios.get(`${carPrefix}/car/getMyApplyList`, params).then(res => res.data) }
export const getMyCarApplyLis = params => { return axios.get(`${carPrefix}/car/getMyApplyList`, params).then(res => res.data) }
export const getMyCarApplyLi = params => { return axios.get(`${carPrefix}/car/getMyApplyList`, params).then(res => res.data) }
export const getMyCarApplyL = params => { return axios.get(`${carPrefix}/car/getMyApplyList`, params).then(res => res.data) }
export const getMyCarApply = params => { return axios.get(`${carPrefix}/car/getMyApplyList`, params).then(res => res.data) }
