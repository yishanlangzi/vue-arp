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
          <div>
            姓名: <input type="text">
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
        return {}
      },
      mounted () {
      },
      computed: {},
      watch: {},
      methods: {
        goOther (pathParam) {
          this.is_slideShow = false
          this.$router.push({
            path: pathParam
          })
        }
      },
      created () {
      },
      components: {}
    }
</script>
<style lang="scss" scoped>

</style>
