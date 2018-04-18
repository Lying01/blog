import Vue from 'vue'
import Router from 'vue-router'
import main from './components/bl-main.vue'
import list from './components/bl-list.vue'

Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: main
  },
  {
    path: '/about',
    component: list
  }, // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]
const router = new Router({
  routes // （缩写）相当于 routes: routes
})

export default router

