<template>
  <div class="main">
    <div id="main-left">
      <!--写成组件形式-->
      <!--<main-left></main-left>-->
      <div class="main-left-content">
        <MainLeftContentApp></MainLeftContentApp>
        <MainLeftContentWork></MainLeftContentWork>
        <MainLeftContentService></MainLeftContentService>
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
  import MainLeftContentApp from './MainLeftContentApp.vue'
  import MainLeftContentWork from './MainLeftContentWork.vue'
  import MainLeftContentService from './MainLeftContentService.vue'
  export default {
    components: {
      MainLeftContentApp,
      MainLeftContentWork,
      MainLeftContentService
    }
  }
</script>

<style lang="scss">
  @import '../sass/WorkSidebar.scss';
</style>
