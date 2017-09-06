<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
        <img src="../img/desk/sytleOne/hangzhouyanjiuyuan.png" alt="ARP信息管理系统">
        {{collapsed?'':sysName}}
      </el-col>
      <el-col :span="10">
        <el-menu
                 class="el-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">功能</template>
              <el-menu-item index="2-1">
                <div id="sdf">
                  <toolbar></toolbar>
                </div>
              </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">消息</el-menu-item>
          <el-menu-item index="4">通讯录</el-menu-item>
          <el-menu-item index="5">日程</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="7" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner">
            <img src="http://172.17.0.106/seed/stoneVfs/local/common/staff/00/sm/537c1e64537ff9e5da12009f447a796e9b810ce4e3e26.jpg" /> 超级管理员
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="goOther('/personal')">个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
  </el-row>

</template>

<script type="text/ecmascript-6">
  import toolbar from './toolbar.vue'
  export default {
    name: 'sdf',
    components: {
      toolbar
    },
    data () {
      return {
        sysName: '',
        collapsed: false,
        sysUserName: '',
        sysUserAvatar: '',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
//          activeIndex: '1',
//          activeIndex2: '1'
        }
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      onSubmit () {
        console.log('submit!')
      },
      handleopen () {
        // console.log('handleopen')
      },
      handleclose () {
        // console.log ('handleclose')
      },
      handleselect: function (a, b) {
      },
      // 退出登录
      logout: function () {
        var _this = this
        this.$confirm('确认退出吗?', '提示', {
          // type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user')
          _this.$router.push('/login')
        }).catch(() => {

        })
      },
      goOther (pathParam) {
//        alert('跳转')
        this.$router.push({
          path: pathParam
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background-color: #ebebeb;
  }
  .container .header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
  }
  .container .header .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  }
  .container .header .userinfo .userinfo-inner {
    cursor: pointer;
    color: #fff;
  }
  .container .header .userinfo .userinfo-inner img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  .container .header .logo {
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238, 241, 146, 0.3);
    border-right-width: 1px;
    border-right-style: solid;
  }
  .container .header .logo img {
    width: 190px;
    float: left;
    margin: 10px 10px 10px 5px;
  }
  .container .header .logo .txt {
    color: #fff;
  }
  .container .header .logo-width {
    width: 230px;
  }
  .container .header .logo-collapse-width {
    width: 60px;
  }
  .container .header .tools {
    padding: 0px 23px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .container .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }
  .container .main aside {
    flex: 0 0 230px;
    width: 230px;
  }
  .container .main aside .el-menu {
    height: 100%;
  }
  .container .main aside .collapsed {
    width: 60px;
  }
  .container .main aside .collapsed .item {
    position: relative;
  }
  .container .main aside .collapsed .submenu {
    position: absolute;
    top: 0px;
    left: 60px;
    z-index: 99999;
    height: auto;
    display: none;
  }
  .container .main .menu-collapsed {
    flex: 0 0 60px;
    width: 60px;
  }
  .container .main .menu-expanded {
    flex: 0 0 230px;
    width: 230px;
  }
  .container .main .content-container {
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
  }
  .container .main .content-container .breadcrumb-container .title {
    width: 200px;
    float: left;
    color: #475669;
  }
  .container .main .content-container .breadcrumb-container .breadcrumb-inner {
    float: right;
  }
  .container .main .content-container .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  .el-menu {
    border-radius: 2px;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #20a0ff;
  }
</style>
