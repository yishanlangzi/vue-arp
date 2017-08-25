<template>
  <div class="main">
    <div id="main-left">
      <!--写成组件形式-->
      <!--<main-left></main-left>-->
      <div class="main-left-content">
        <div class="main-left-content-app clearfix">
          <div class="main-left-content-app-top">
            <h3>常用应用</h3>
          </div>
          <div class="main-left-content-app-bottom">
            <ul class="main-left-content-app-bottom-ul">
              <li>
                <a href="#">
                  <img src="../img/desk/frota/icon-frota-left-app1.png" alt="">
                  <span class="main-left-content-app-bottom-span">会议</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../img/desk/frota/icon-frota-left-app1.png" alt="">
                  <span class="main-left-content-app-bottom-span">新闻</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../img/desk/frota/icon-frota-left-app7.png" alt="">
                  <span class="main-left-content-app-bottom-span">用车</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../img/desk/frota/icon-frota-left-app8.png" alt="">
                  <span class="main-left-content-app-bottom-span">日程</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-left-content-app main-left-content-work clearfix">
          <div class="main-left-content-app-top">
            <h3>工作待办</h3>
          </div>
          <div class="main-left-content-app-bottom">
            <ul class="main-left-content-app-bottom-ul">
              <li>
                <a href="#">
                  <img src="../img/desk/frota/icon-frota-left-app1.png" alt="">
                  <h2>新闻</h2>
                  <p>陈远平驳回了您提交的题为“ttttt”的【通知】发布申请 请求审批</p>
                  <span class="main-left-content-app-bottom-span">9</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-left-content-app main-left-content-service clearfix">
          <div class="main-left-content-app-top">
            <h3>集成服务</h3>
          </div>
          <div class="main-left-content-app-bottom">
            <ul class="main-left-content-app-bottom-ul">
              <li>
                <a href="#">
                  <img src="../img/desk/frota/wendang.png" alt="">
                  <span class="main-left-content-app-bottom-span">团队文档</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../img/desk/frota/icon-draggable-service3.png" alt="">
                  <span class="main-left-content-app-bottom-span">文献情报中心</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../img/desk/frota/huzhao.png" alt="">
                  <span class="main-left-content-app-bottom-span">互签系统</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../img/desk/frota/huzhao.png" alt="">
                  <span class="main-left-content-app-bottom-span">信息资源服务平台</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="center-footer main-left-content-footer">
          <button class="btn btn-default" type="button" ng-click="bizCtrl.addBlock(bizCtrl.userProtaConfig.portalConfigJson,'leftDiv')">
            <i class="glyphicon glyphicon-plus"></i>个性配置
          </button>
        </div>
      </div>
    </div>
    <div id="main-center"></div>
    <div id="main-right"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="scss">
  .clearfix:after {
    content: " ";
    display: block;
    clear: both;
    height: 0;
  }
  .clearfix {
    zoom: 1;
  }
  #main-left{
    width: 260px;
    .main-left-content-app{
      width: 100%;
      background: white;
      height: auto;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-bottom: 20px;
      h3{
        font-size: 14px;
        color: #333333;
        margin: 0;
        padding: 0 20px;
        height: 46px;
        line-height: 46px;
        border-bottom: 1px solid #eaeaea;
      }
      ul{
        padding:0;
        li{
          float: left;
          list-style: none;
          width: 64px;
          height: 64px;
          border-radius: 5px;
          text-align: center;
          padding: 8px;
          cursor: pointer;
          img{
            max-width: 36px;
            max-height: 36px;
            display: block;
            margin:0 18px;
          }
          a{
            display: block;
            width: 100%;
            text-decoration: none;
            span{
              font-size: 12px;
              color: #333333;
              white-space: normal;
              text-align: center;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;

            }
          }
        }
      }
    }
    .main-left-content-work{
      .main-left-content-app-bottom{
        position: relative;
        h2{
          position: absolute;
          left: 60px;
          margin: 0;
          top: 0;
          font-size: 14px;
        }
        p{
          position: absolute;
          left: 60px;
          top: 25px;
          font-size: 12px;
          color: #787878;
          margin: 0;
          width: 180px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 20px;
          line-height: 20px;
        }
        span{
          position: absolute;
          right: 30px;
          top: 0;
          font-size: 14px;
          display: inline-block;
          min-width: 10px;
          height: 18px;
          line-height:18px;
          padding: 1px 10px;
          font-weight: bold;
          color: #fff;
          vertical-align: middle;
          white-space: nowrap;
          text-align: center;
          background-color: #ff6600;
          border-radius: 10px;
        }
      }
    }
    .main-left-content-service{
      .main-left-content-app-bottom-span{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 48px;
        display: inline-block;
      }
    }
    .main-left-content-footer{
      .btn{
        display: inline-block;
        margin-bottom: 0;
        font-weight: normal;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        white-space: nowrap;
        padding: 6px 12px;
        line-height: 1.42857;
        border-radius: 4px;
        width: 100%;
        height: 43px;
        background: #f7f7f7;
        border: 1px solid #ddd;
        color: #333333;
        font-size: 14px;
        outline: none;
        i{
          position: relative;
          top: 1px;
          display: inline-block;
          font-family: 'Glyphicons Halflings';
          font-style: normal;
          font-weight: normal;
          line-height: 1;
          -webkit-font-smoothing: antialiased;
          color: #999999;
          margin-right: 5px;
            &:before{
              content: "\002b";
            }
          }

      }
    }
  }
</style>
