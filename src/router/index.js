import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import toolbar from '@/components/toolbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/toolbar',
      name: 'toolbar',
      component: toolbar
    }
  ]
})
