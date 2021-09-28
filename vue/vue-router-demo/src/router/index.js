import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goods from '../pages/goods/goods'
import ratings from '../pages/ratings/ratings'
import seller from '../pages/seller/seller'
import pr from '../pages/pr/pr'
import detail from '../pages/detail/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/ratings',
      component:ratings
      
    },
    {
      path:'/seller',
      component:seller
    },
    {
      path:'/pr',
      component:pr
    },
    {
      path:"/goods/:id",//动态路径
      component:detail
    }
  ]
})
