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
        <div id="app">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name" class="rightbottom_input">
              <el-input class="rightbottom_input" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="resource" class="rightbottom_input">
              <el-radio class="radio" v-model="radio" label="1">男</el-radio>
              <el-radio class="radio" v-model="radio" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone" class="rightbottom_input">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>

            <el-tooltip :content="value3" placement="top" class="rightbottom_phone">
              <el-switch
                v-model="value3"
                on-color="#13ce66"
                off-color="#ff4949"
                on-value="公开"
                off-value="私密">
              </el-switch>
            </el-tooltip>

            <el-form-item label="工作邮箱" prop="email" class="rightbottom_input">
              <el-input class="rightbottom_input" v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="办公地址" prop="address" class="rightbottom_input">
              <el-input class="rightbottom_input" v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="座机号码" prop="Landline" class="rightbottom_input">
              <el-input class="rightbottom_input" v-model="ruleForm.Landline"></el-input>
            </el-form-item>
            <el-form-item label="部门" class="rightbottom_input">
              <el-input class="rightbottom_input" v-model="ruleForm.department"></el-input>
            </el-form-item>
            <el-form-item label="岗位" class="rightbottom_input">
              <el-input class="rightbottom_input" v-model="ruleForm.jobsId"></el-input>
            </el-form-item>

            <el-form-item style="margin-left: 0">
              <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//  import Vue from 'vue'
  export default {
    data () {
      return {
        radio: '1',
        value3: '私密',
        ruleForm: {
          name: '',
          phone: '',
          email: '',
          address: '',
          Landline: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请输地址', trigger: 'blur' }
          ],
          Landline: [
            { required: true, message: '请输入座机号码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import url("//unpkg.com/element-ui@1.4.4/lib/theme-default/index.css");
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
        .rightbottom_input{
          width: 300px;
        }
        .rightbottom_phone{
          left: -20px;
          top: -34px;
        }
      }
    }
  }

</style>
