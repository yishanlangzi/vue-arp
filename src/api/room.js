import axios from 'axios'
let base = '/api'
export const meetingRoomPrefix = 'meetingroom/api'
export const getRoomListApi = params => { return axios.post(`${base}/room/list`, params).then(res => res.data) }
