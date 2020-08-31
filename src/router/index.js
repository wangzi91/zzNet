import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login/index'
import index from '@/pages/index/index'
import news from '@/pages/news/index'
import layout from '@/pages/layout/index'

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: layout,
      redirect: '/index',
      name: 'index',
      hidden: true,
      children: [
        {
          path: 'index',
          component: index
        },
        {
          path: 'news',
          component: news
        }
      ]
    }
  ]
})
