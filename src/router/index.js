import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import toolbar from '@/components/toolbar'
import personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        path: 'personal',
        name: 'personal',
        component: personal
      }]
    },
    {
      path: '/toolbar',
      name: 'toolbar',
      component: toolbar
    }
  ]
})
