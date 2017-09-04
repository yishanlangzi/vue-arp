<template>
  <div class="main">
    <div id="main-left">
      <!--写成组件形式-->
      <!--<main-left></main-left>-->
      <div class="main-left-content">
        <MainLeftContentApp></MainLeftContentApp>
        <!--<MainLeftContentWork></MainLeftContentWork>-->
        <!--<MainLeftContentService></MainLeftContentService>-->
        <div class="center-footer main-left-content-footer">
          <button class="btn btn-default" type="button">
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
//  import MainLeftContentWork from './MainLeftContentWork.vue'
//  import MainLeftContentService from './MainLeftContentService.vue'
  export default {
    data () {
      return {
      }
    },
    mounted () {
    },
    computed: {
    },
    watch: {
    },
    methods: {
//      function () {
//        // GET /someUrl
//        this.$http.get('http://localhost:8088/test').then(response => {
//          console.log(response.data)
//          // get body data
//          // this.someData = response.body;
//        }, response => {
//          console.log('error')
//        })
//      }
    },
    created () {
    },
    components: {
      MainLeftContentApp
//      MainLeftContentWork,
//      MainLeftContentService
    }
  }
</script>

<style lang="scss">
  @import '../sass/WorkSidebar.scss';
</style>
