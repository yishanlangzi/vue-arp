import axios from './http'
import { seedPrefix } from './app'
// 获取个人通讯录接口
export const queryPersonAddressbook = params => { return axios.get(`${seedPrefix}/organization/queryAddressOrgTreeStaffsPage?orderKey=&${params}`).then(res => res) }
// 获取组织机构接口
export const queryOrgList = params => { return axios.post(`${seedPrefix}/organization/queryAllOrgs`, params).then(res => res.data) }
// 获取机构内人员信息接口
export const queryOrgPersonInfo = params => { return axios.get(`${seedPrefix}/organization/queryAddressDirectDeptStaffsPagebByOrgId/${params}`).then(res => res.data) }
// 更新个人密码接口
export const queryPersonNumber = params => { return axios.post(`${seedPrefix}/organization/queryDirectOrgStaffCount/${params}`).then(res => res.data) }
// 获取人员信息接口
export const getPersonInfo = params => { return axios.get(`${seedPrefix}/staff/getStaffInfoByUserid/${params}`).then(res => res.data) }
// 查询自身组织信息
export const queryOrgInfo = params => { return axios.get(`${seedPrefix}/organization/queryOrgByOrgId/${params}`).then(res => res.data) }
// 查询群组通讯录
export const queryGroupList = params => { return axios.get(`${seedPrefix}/directories`).then(res => res.data) }
// id数组查询人员信息
export const queryUsersInfoList = params => { return axios.post(`${seedPrefix}/staff/queryStaffAndOrgByUserIds`, params).then(res => res.data) }
// 搜索人员接口
export const searchUsersInfo = params => { return axios.get(`${seedPrefix}/organization/queryAddressOrgTreeStaffsPage${params}`).then(res => res.data) }
