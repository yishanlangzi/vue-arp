<template>
  <div id="personal-main">
    <div id="left">
      <div class="left_top">
        <div class="lefttopImg">
          <img src="http://172.17.0.106/seed/stoneVfs/local/common/staff/00/lg/537c1e64537ff9e5da12009f447a796e9b810ce4e3e26.jpg" alt="">
        </div>
        <div class="lefttopText">超级管理员</div>
      </div>
      <div class="left_bottom">
        <ul>
          <li @click="bizCtrl.blockTOshow('personal')" class="leftbottomImg select"><img src="../img/desk/sytleOne/per.png" alt="">个人信息</li>
          <li @click="bizCtrl.blockTOshow('password')" class="leftbottomImg"><img src="../img/desk/sytleOne/lock.png" alt="">修改密码</li>
          <li @click="bizCtrl.blockTOshow('loginLog')" class="leftbottomImg"><img src="../img/desk/sytleOne/wendang.png" alt="">登陆日志</li>
        </ul>
      </div>
    </div>
    <div id="right">
      <div class="righttop"><h4>个人信息</h4></div>
      <div class="rightbottom">
        <form action="">
          <div class="form-group sw-form-group">
            <label class="col-md-2 sw-coa-designation">姓名：</label>
            <div class="col-md-5  has-feedback">
              <input class="form-control sw-coa-personal-control" name="userName" type="text" placeholder="[必填]">
            </div>
          </div>
          <div class="form-group sw-form-group sw-form-select">
            <label class="col-md-2 sw-label-vtop">性别：</label>
            <div class="has-feedback">
              <div class="checkbox checkbox1 checkbox2">
                <label>
                  <input type="radio" name="optionsRadios" value="M" checked="">
                  男
                </label>
                <label>
                  <input type="radio" name="optionsRadios" value="F">
                  女
                </label>
              </div>
              <!--<span class="sw-col-error-icon ng-hide" tooltip-placement="bottom"></span>-->
            </div>
          </div>

          <div class="form-group sw-form-group">
            <label class="col-md-2 sw-coa-designation">手机号码：</label>
            <div class="col-md-5  has-feedback">
              <input class="form-control sw-coa-personal-control" v-model.lazy="personInfo.mobile" name="userName" type="text" placeholder="[唯一、必填]">

            </div>
          </div>
          {{personInfo.mobile}}
          <div class="form-group sw-form-group">
            <label class="col-md-2 sw-coa-designation" v-model.lazy="personInfo.emailWork">工作邮箱：</label>
            <div class="col-md-5  has-feedback">
              <input class="form-control sw-coa-personal-control" name="userName" type="text" placeholder="[唯一、必填]">
            </div>
          </div>
          <div class="form-group sw-form-group">
            <label class="col-md-2 sw-coa-designation">办公地址：</label>
            <div class="col-md-5  has-feedback">
              <input class="form-control sw-coa-personal-control" name="userName" type="text" placeholder="[必填]">
            </div>
          </div>
          <div class="form-group sw-form-group">
            <label class="col-md-2 sw-coa-designation">座机号码：</label>
            <div class="col-md-5  has-feedback">
              <input class="form-control sw-coa-personal-control" name="userName" type="text" placeholder="[必填]">
            </div>
          </div>
          <div class="form-group sw-form-group">
            <label class="col-md-2 sw-coa-designation">部门：</label>
            <div class="col-md-5  has-feedback">
              <input class="form-control sw-coa-personal-control" name="userName" type="text" placeholder="[必填]">
            </div>
          </div>
          <div class="form-group sw-form-group">
            <label class="col-md-2 sw-coa-designation">岗位：</label>
            <div class="col-md-5  has-feedback">
              <input class="form-control sw-coa-personal-control" name="userName" type="text" placeholder="[必填]">
            </div>
          </div>
          <button type="button" class="btn btn-warning btn-saves" @click="save()">保存</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import { queryStaffInfo, updateStaff } from '../api/home'

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
      save () {
        if (!this.teltest) {
//            MessageBox({
//              title: '提示',
//              message: '请您填写正确的手机号码'
//            })
          alert('请您填写正确的手机号码')
        } else if (!this.emailtest) {
//            MessageBox({
//              title: '提示',
//              message: '请您填写正确的邮箱'
//            })
          alert('请您填写正确的邮箱')
        } else {
          let staff = this.personInfo
          updateStaff(staff).then(data => {
            this.$alert('操作成功').then(action => {
              this.infoShow = true
            })
          })
        }
      },
      queryInfo () {
        queryStaffInfo().then(data => {
          if (data.gender === 'M') {
            data.sex = '男'
          } else {
            data.sex = '女'
          }
          this.personInfo = data
        })
      },
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
    components: {}
  }
</script>
<style lang="scss" scoped>
  #personal-main{
    margin: 10px 300px;
    #left{
      float: left;
      width: 200px;
      height:800px;
      background-color: #ffffff;
      margin-right: 20px;
      .lefttopImg{
        margin: 20px 40px;
        display: block;
        width: 120px;
        height: 100%;
        overflow: hidden;
        border-radius: 100%;
        background-color: whitesmoke;
        position: relative;
      }
      .left_bottom{
        margin-top: 20px;
        ul{
          padding:0;
          .select{
            background-color: whitesmoke;
            border: none;
          }
          .leftbottomImg{
            list-style: none;
            height: 44px;
            line-height: 44px;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            img{
              margin-right: 10px;
            }
          }
        }
      }
    }
    #right{
      width: 796px;
      height: calc(100% - 20px);
      background: #fff;
      border: 1px solid #ddd;
      float: left;
      overflow: hidden;
      .righttop{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #eaeaea;
        h4{
          font-size: 16px;
          line-height: 34px;
          margin-left: 20px;
          font-weight: 600;
          color: #333;
        }
      }
      .rightbottom{
        overflow-y: auto;
        form{
          padding-left: 100px;
          margin-top: 20px;
          .form-group {
            margin-bottom: 25px;
            text-align: left;
            .col-md-2{
              display: inline-block;
              font-size: 14px;
              float: none;
              margin: 0 0 0 -7px;
              vertical-align: middle;
            }
            .col-md-5{
              display: inline-block;
              input{
                width: 291px;
                height: 36px;
                border: 1px solid #ebebeb;
                /*background-color: #eeeeee;*/
                padding: 6px 10px;
                text-align: left;
                border-radius: 4px;
              }
            }
          }
          .has-feedback{
            display: inline-block;
            div{
              margin-left: 20px;
            }
          }
          .btn{
            width: 110px;
            height: 38px;
            font-size: 16px;
            background: #ff9900;
            margin: 10px 110px 100px 0;
          }
          .btn:hover{
            background: #cc7a00;
          }
        }
      }
    }
  }

</style>
