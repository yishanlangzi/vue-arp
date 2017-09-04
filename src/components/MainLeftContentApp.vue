<template>
  <div class="main-left-content-app clearfix">
    <div class="main-left-content-app-top">
      <h3>常用应用</h3>
    </div>
    <div class="main-left-content-app-bottom">
      <!--<ul class="main-left-content-app-bottom-ul">-->
        <!--<li>-->
          <!--<a href="#">-->
            <!--<img src="../img/desk/frota/icon-frota-left-app1.png" alt="">-->
            <!--<span class="main-left-content-app-bottom-span">会议</span>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#">-->
            <!--<img src="../img/desk/frota/icon-frota-left-app1.png" alt="">-->
            <!--<span class="main-left-content-app-bottom-span">新闻</span>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#">-->
            <!--<img src="../img/desk/frota/icon-frota-left-app7.png" alt="">-->
            <!--<span class="main-left-content-app-bottom-span">用车</span>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#">-->
            <!--<img src="../img/desk/frota/icon-frota-left-app8.png" alt="">-->
            <!--<span class="main-left-content-app-bottom-span">日程</span>-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->
      <ul class="appList">
        <li v-for=" app in appList" :key="app.id" @click="goToUrl(app.url)">
          <!-- <mt-badge class="badgeDefine" size="small" color="red">{{app.id}}</mt-badge> -->
          <a :style="{'background-color': app.bgColor}">
            <i class="iconfont" :class="app.iconfont"></i>
          </a>
          <div class="aname">
            <span>{{app.name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getAppListApi } from '../api/app'
  export default {
    data () {
      return {
        appList: {}
      }
    },
    mounted () {
      this.getAppList()
    },
    computed: {
    },
    watch: {
    },
    methods: {
      getAppList () {
        getAppListApi().then(data => {
          console.log(data)
          this.appList = data
        })
      },
      goToUrl (params) {
        if (params === '#') {
          alert({
            title: '提示',
            message: '应用正在开发中',
            showCancelButton: true
          })
          return
        }
        this.$router.push({
          path: params
        })
      }
    },
    created () {
    },
    components: {
    }
  }
</script>
<style type="text/css" lang="scss">
  .appList {
  li {
    margin: 0 auto;
    float: left;
    display: inline-block;
    text-align: center;
    width: 23%;
    padding: 10px 0.5% 10px 0.5%;
    position: relative;
  a {
    border-radius: 15px;
    display: inline-block;
  // margin: 5px;
    width: 48px;
    height: 48px;
    line-height: 48px;
  // border:solid 1px #EEE;
  i {
    font-size: 32px;
    color: #FFF;
  }
  }
  .aname {
  span {
    display: inline-block;
  // margin-left: 18px;
    margin-top: 5px;
  }
  }
  }
  }
</style>

