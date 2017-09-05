<template>
    <div>
      <div id="left">
        <div class="left_top">
          <div class="lefttopImg">
            <img src="http://172.17.0.106/seed/stoneVfs/local/common/staff/00/lg/537c1e64537ff9e5da12009f447a796e9b810ce4e3e26.jpg" alt="">
          </div>
          <div class="lefttopText">超级管理员</div>
        </div>
        <div class="left_bottom">
          <div class="select">
            <div class="leftbottomImg"><img src="img/desk/sytleOne/per.png" alt="">
              <div class="leftbottomText">个人信息</div>
            </div>
          </div>
          <div class="select">
            <div class="leftbottomImg"><img src="img/desk/sytleOne/lock.png" alt="">
              <div class="leftbottomText">修改密码</div>
            </div>
          </div>
          <div class="select">
            <div class="leftbottomImg"><img src="img/desk/sytleOne/wendang.png" alt="">
              <div class="leftbottomText">登陆日志</div>
            </div>
          </div>
        </div>
      </div>
      <div id="right">
        <div class="righttop"><h3>个人信息</h3></div>
        <div class="rightbottom">
          <div class="content" v-show="!infoShow">
            <mt-field label="姓名：" v-model="personInfo.userName" readonly></mt-field>
            <mt-field label="性别：" v-model="personInfo.sex" readonly></mt-field>

            <mt-field label="手机号码：" type="number" v-model.lazy="personInfo.mobile">
              <mt-switch v-model="personInfo.phoneEnabled">
                <span v-show="personInfo.phoneEnabled==='true'">公开</span>
                <span v-show="!personInfo.phoneEnabled==='false'">私密</span>
              </mt-switch>
            </mt-field>

            <mt-field label="工作邮箱：" type="email" v-model.lazy="personInfo.emailWork" id="email"></mt-field>
            <mt-field label="办公地址：" type="url" v-model="personInfo.officeAddr"></mt-field>
            <mt-field label="座机号码：" type="number" v-model="personInfo.officeTel"></mt-field>
            <mt-field label="部门：" type="text" v-model="personInfo.corpDeptName" readonly></mt-field>
            <mt-field label="岗位：" type="text" v-model="personInfo.jobsId" readonly></mt-field>
            <div class="footer">

              <mt-button type="primary" size="large" @click="save()" class="saveBtn">保存</mt-button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    // import { MessageBox } from 'mint-ui'
//    import $Name$ from '$Route$'

    export default {
      data () {
        return {
          personInfo: {
            gender: ''
          },
          infoShow: true,
          sex: true,
          value: true,
          emailtest: '',
          teltest: ''
        }
      },
      mounted () {
        this.queryInfo()
      },
      computed: {
        pokerHistory () {
          return this.personInfo.emailWork
        },
        telNumber () {
          return this.personInfo.mobile
        }
      },
      watch: {
        pokerHistory (newValue, oldValue) {
          this.emailWorkTest(newValue)
        },
        telNumber (newValue, oldValue) {
          this.mobileTest(newValue)
          console.log(newValue)
        }
      },
      methods: {
        goBack () {
          this.$router.go(-1)
        },
        change () {
          this.infoShow = false
        },
//        cancel () {
//          queryStaffInfo().then(data => {
//            if (data.gender === 'M') {
//              data.sex = '男'
//            } else {
//              data.sex = '女'
//            }
//            this.personInfo = data
//          })
//          this.infoShow = true
//        },
        save () {
          if (!this.teltest) {
            alert('请您填写正确的手机号码')
          } else if (!this.emailtest) {
            alert('请您填写正确的邮箱')
          } else {
//            let staff = this.personInfo
//            updateStaff(staff).then(data => {
//              alert('操作成功').then(action => {
//                this.infoShow = true
//              })
//            })
          }
        },
//        queryInfo () {
//          queryStaffInfo().then(data => {
//            if (data.gender === 'M') {
//              data.sex = '男'
//            } else {
//              data.sex = '女'
//            }
//            this.personInfo = data
//          })
//        },
        mobileTest (mobile) {
          let telTest = /^[1][34578][0-9]{9}$/
          if (telTest.test(mobile)) {
            this.teltest = true
          } else if (!telTest.test(mobile)) {
            this.teltest = false
          }
        },
        emailWorkTest (email) {
          let pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
          if (pattern.test(email)) {
            this.emailtest = true
          } else {
            this.emailtest = false
          }
        }
      },
      created () {
      },
      components: {
      }
    }
</script>
<style lang="scss" scoped>
  .infoTitle {
    text-align: left;
    font-weight: 600;
    color: #333;
  }
  .footer {
    border-top: 1px solid #d9d9d9;
    padding: 15px 0px;

  }
  .sex {
    height: 48px;
    width: 100%;
    padding: 0px 10px;
    border-top: 1px solid #d9d9d9;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 10px;
    width: 100%;
  }
  .radio {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: -1px 4px 0 0;
    vertical-align: middle;
    cursor: pointer;
  }
  .saveBtn {
    width: 70%;
    margin-left: 14%;
  }
</style>
