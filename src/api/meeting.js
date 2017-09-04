import axios from './http'
import { seedPrefix } from './app'
export const meetingPrefix = 'meetingroom/api'
// 获取我参加的会议
export const queryMyTakePartMeetings = params => { return axios.post(`${meetingPrefix}/meetingInfo/queryMyTakePartMeetings`, params).then(res => res.data) }
// 获取我申请的会议
export const queryMyApplyMeetingInfos = params => { return axios.post(`${meetingPrefix}/meetingInfo/queryMyApplyMeetingInfos`, params).then(res => res.data) }
// 获取所有的参会信息
export const queryAllMeetingInfos = params => { return axios.post(`${meetingPrefix}/meetingInfo/queryAllMeetingInfos`, params).then(res => res.data) }
// 查询人员信息
export const queryStaffInfoByUserIds = params => { return axios.post(`${seedPrefix}/staff/queryStaffAndOrgByUserIds`, params).then(res => res.data) }
// 根据会议ID查询会议详情
export const getMeetingInfo = params => { return axios.post(`${meetingPrefix}/meetingInfo/queryEntity/${params}`).then(res => res.data) }
// 查询所有会议类型
export const getTypeInfo = params => { return axios.post(`${meetingPrefix}/meetingType/queryAllByDict/1`).then(res => res.data) }
// 查询我的会议申请
export const getMyApply = (params, key) => { return axios.post(`${meetingPrefix}/meetingInfo/queryByCondition${key}`, params).then(res => res) }
// 查询会议室详情 meetingRoomInfo
export const getMeetingRoomInfo = params => { return axios.get(`${meetingPrefix}/meetingRoomInfo/${params}`).then(res => res.data) }
// 获取所有会议室
export const getAllMeetingRoom = params => { return axios.get(`${meetingPrefix}/meetingRoomInfo/queryAllMeetingRoom/1`).then(res => res.data) }
// 发送会议室预订信息
export const sendMeetingInfo = params => { return axios.post(`${meetingPrefix}/meetingInfo`, params).then(res => res) }
// 查询会议室会议预订信息
export const queryMeeting = params => { return axios.get(`${meetingPrefix}/meetingInfo/${params}`).then(res => res.data) }
// 查询待确认会议列表
export const queryMtDaiban = params => { return axios.get(`${meetingPrefix}/confirm`).then(res => res.data) }
// 根据会议ID数组查询会议
export const queryMtByMtIDs = params => { return axios.post(`${meetingPrefix}/meetingInfo/queryMtInfoByMtIds`, params).then(res => res.data) }
// 确认是否参加会议
export const confirmMt = (randomKey, attend) => { return axios.post(`${meetingPrefix}/disposeTodos/${randomKey}/${attend}`).then(res => res) }
// 取消会议接口 put形式
export const cancelMtFun = params => { return axios.put(`${meetingPrefix}/meetingInfo`, params).then(res => res) }
// 删除会议草稿接口 delete形式
export const deleteMtFun = params => { return axios.delete(`${meetingPrefix}/meetingInfo/${params}`).then(res => res) }
