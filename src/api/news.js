import axios from 'axios'
import { seedPrefix } from './app'
export const cmsPrefix = 'cms/api'
// export const getNewsList = params => { return axios.post(`${base}/news/list`, params).then(res => res.data) }
// 获取新闻一级栏目接口  613abfb64b634fbfbccab83d5ef876d2?page=1&pageSize=5
export const getTabsList = params => { return axios.get(`${seedPrefix}/portal/getCurrentUserPortalConfig`, params).then(res => res.data) }
export const getNextTabsByColumnId = params => { return axios.get(`${cmsPrefix}/category/queryAll/${params}`).then(res => res.data) }
// 获取栏目下的新闻
export const getNewsByColumnId = (params, oederKey) => { return axios.post(`${cmsPrefix}/category/queryContentsByList/${params}`, oederKey).then(res => res) }
// 获取通知接口
// export const getTopicList = params => { return axios.get(`${cmsPrefix}/v1/category/queryContentsByListByType/3`, params).then(res => res.data) }
// 根据id查询新闻内容
export const getNewsDetail = params => { return axios.get(`${cmsPrefix}/v1/category/queryContent/${params}`).then(res => res.data) }
// 查询人员信息
export const queryStaffInfoByUserIds = params => { return axios.get(`${seedPrefix}/staff/getStaffInfoByUserid/${params}`).then(res => res.data) }

// 查询新闻审批
export const queryNewsApprovingApi = params => { return axios.get(`${cmsPrefix}/contents/mine/approving?distance=0?orderKey=&${params}`).then(res => res.data) }
export const queryNewsPulishedApi = params => { return axios.get(`${cmsPrefix}/contents/mine/published?distance=0?orderKey=&${params}`).then(res => res.data) }
export const queryNewsDraftsApi = params => { return axios.get(`${cmsPrefix}/contents/mine/drafts?distance=0?orderKey=&${params}`).then(res => res.data) }
export const queryNewsBackedApi = params => { return axios.get(`${cmsPrefix}/contents/mine/backed?distance=0?orderKey=&${params}`).then(res => res.data) }
export const queryNewsRefusedApi = params => { return axios.get(`${cmsPrefix}/contents/mine/refused?distance=0?orderKey=&${params}`).then(res => res.data) }

export const queryNewsHistoryApi = params => { return axios.get(`${cmsPrefix}/tasks/history?${params}`).then(res => res.data) }
export const queryNewsActiveApi = params => { return axios.get(`${cmsPrefix}/tasks/active`).then(res => res.data) }
