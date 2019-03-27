import Vue from 'vue'
import Router from 'vue-router'
import list from '@/views/list'
import detail from '@/views/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      path: '/list/',
      name: 'list',
      component: list,
      children: [
        {path: '/list/:id', component: detail},
      ]
    }
  ]
})
