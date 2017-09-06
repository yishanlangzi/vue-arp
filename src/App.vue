<template>
  <div id="app" >
    <div id="banner">
      <toolbar></toolbar>
    </div>
    <div id="sw-draggable-main" >
      <!--<workSidebar></workSidebar>-->
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import toolbar from './components/Home.vue'
//  import workSidebar from './components/workSidebar.vue'
export default {
    name: 'app',
    components: {
      toolbar: toolbar
//      workSidebar: workSidebar
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  #banner{
    margin-left: -8px;
  }
  #sw-draggable-main{
    position: absolute;
    top: 80px;

  }
}
</style>
