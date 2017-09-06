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
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间" required>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送" prop="delivery">
                <el-switch on-text="" off-text v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    let Main = {
      data () {
        return {
          ruleForm: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
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
    var Ctor = Vue.extend(Main)
    new Ctor().$mount('#app')
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
      }
    }
  }

</style>
