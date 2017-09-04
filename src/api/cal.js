import axios from './http'
import { seedPrefix } from './app'
export const calPrefix = 'coa/api'
// 日程公用后台接口{ids: params}
export const deleteEvent = params => { return axios.post(`${calPrefix}/calendar/deleteCalendars`, params).then(res => res.data) } // 删除日程
export const queryStaffInfoByUserIds = params => { return axios.post(`${seedPrefix}/staff/queryStaffInfoByStaffIds`, params).then(res => res.data) } // 查询人员信息
// 个人日程页面后台接口
export const getMyDayCalendar = params => { return axios.post(`${calPrefix}/calendar/queryMyCalendarByDate`, params).then(res => res.data) }
// 部门日程页面接口
export const queryMyDept = params => { return axios.post(`${calPrefix}/group/queryMyDeptUserIds`, params).then(res => res.data) }
export const getDeptCalendar = params => { return axios.post(`${calPrefix}/calendar/queryDeptCalendars`, params).then(res => res.data) }
// 群组日程页面接口
export const getMyGroup = params => { return axios.get(`${calPrefix}/group/queryGroupsByUserIdAndGroupType/GROUP`).then(res => res.data) }
export const getStaffInfosOfMyGroup = params => { return axios.post(`${calPrefix}/staff/queryStaffsByUserIdsAndQueryKey`, params).then(res => res.data) }
export const getGroupCalendar = params => { return axios.post(`${calPrefix}/calendar/queryGroupCalendars`, params).then(res => res.data) }
export const getGroupInfo = params => { return axios.get(`${calPrefix}/group/queryEntityByGroupId/${params}`).then(res => res.data) }
export const updateGroup = params => { return axios.post(`${calPrefix}/group/saveOrUpdateGroup`, params).then(res => res) }
// 群组日程获取人员信息
export const queryAllStaffsByOrgIdPage = (params, queryKey) => { return axios.post(`${seedPrefix}/organization/queryAllStaffsByOrgIdPage${queryKey}`, params).then(res => res) }
export const getGroups = params => { return axios.post(`${seedPrefix}/organization/queryAllOrgs`, params).then(res => res.data) }
// 群组日程保存群组
export const saveCalGroup = params => { return axios.post(`${calPrefix}/group/saveOrUpdateGroup`, params).then(res => res) }
// 添加日程页面后台接口
export const addDayCalendar = params => { return axios.post(`${calPrefix}/calendar/saveCalendar`, params).then(res => res.data) }
// 领导日程后台接口
export const queryMyLeader = params => { return axios.post(`${calPrefix}/group/queryMyBossUserIds`, params).then(res => res.data) }
export const queryLeadersCalendars = params => { return axios.post(`${calPrefix}/calendar/queryisBossCalendars`, params).then(res => res.data) }
// 同事日程后台接口
export const queryMyColleagueUserIds = params => { return axios.post(`${calPrefix}/group/queryMyColleagueUserIds`, params).then(res => res.data) }
export const queryColleagueCalendarsNew = params => { return axios.post(`${calPrefix}/calendar/queryColleagueCalendarsNew`, params).then(res => res.data) }
// 共享日程后台接口
export const queryMyCalApply = params => { return axios.post(`${calPrefix}/requestLog/queryLogsByRequestUserIdPage${params}`).then(res => res) }
export const queryOtherCalApply = params => { return axios.post(`${calPrefix}/requestLog/queryLogsByResponseUserIdPage${params}`).then(res => res) }
export const deletelogs = params => { return axios.post(`${calPrefix}/requestLog/resDeleteRequestLog`, params).then(res => res.data) }
export const refuseShare = params => { return axios.post(`${calPrefix}/requestLog/refuseShareCalendar`, params).then(res => res) }
export const deleteResShare = params => { return axios.post(`${calPrefix}/requestLog/resDeleteRequestLog`, params).then(res => res) }
export const acceptlogs = params => { return axios.post(`${calPrefix}/requestLog/acceptShareCalendar`, params).then(res => res) }
export const requestShare = params => { return axios.post(`${calPrefix}/requestLog/requestShareCalendar`, params).then(res => res) }

// 根据ID获取日程信息
export const getCalDetailById = params => { return axios.post(`${calPrefix}/calendar/queryCalendarTo`, params).then(res => res) }
