import axios from 'http'
// import { meetingRoomPrefix } from './room'
// import { calPrefix } from './cal'
// import { cmsPrefix } from './news'
import { staticPrefix } from '../config'
// 公共类型配置
export const seedPrefix = 'seed/api'
// 首页接口
export const getAppListApi = params => { return axios.get(`${staticPrefix}static/data/apps.json`).then(res => res.data) }
export const getAllAppListApi = params => { return axios.get(`${staticPrefix}/static/data/all-apps.json`).then(res => res.data) }
// // 获取首页会议信息接口
// export const getMeetingInfoList = params => { return axios.post(`${meetingRoomPrefix}/meetingInfo/queryMyApplyAndJion`, params).then(res => res.data) }
// // 获取首页日程信息接口
// export const getCalendarList = params => { return axios.post(`${calPrefix}/calendar/queryMyCalendarToByToday?page=1&pageSize=4`, params).then(res => res.data) }
// // 获取首页新闻信息接口
// export const getTopicList = params => { return axios.post(`/${cmsPrefix}/category/queryContentsByList/05e981fcda9347bcab8e05a34b8c97d5`, params).then(res => res.data) }
// // 获取首页会议申请信息接口
// export const getMyApply = params => { return axios.post(`/${meetingRoomPrefix}/meetingInfo/queryMyApplyMeetingInfos`, params).then(res => res.data) }
// // 获取首页通知信息接口
// export const getNewsList = (params, columnId) => { return axios.post(`/${cmsPrefix}/category/queryContentsByList/${columnId}?page=1&pageSize=5`, params).then(res => res.data) }
// export const getCMS = params => { return axios.get(`/${cmsPrefix}/category/queryAll/0`).then(res => res.data) }
// // 根据Token 获取用户信息
// export const loginByToken = params => { return axios.get(`/seed/api/tokens/` + params + '/all').then(res => res.data) }
