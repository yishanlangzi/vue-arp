// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import BootstrapSass from 'bootstrap-sass'
// import 'bootstrap-sass/assets/stylesheets/bootstrap/_glyphicons.scss'
import App from './App'
import router from './router'

// require('!style-loader!scss-loader!css-loader!./build/meetting/debug/css/desk.min.css')
Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(BootstrapSass)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
