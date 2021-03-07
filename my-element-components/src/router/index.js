import Vue from 'vue'
import VueRouter from 'vue-router'

import routeArr from './common'

Vue.use(VueRouter)

function routeFunc(arr){
  const route = []
  arr.forEach(item=>{
    route.push({
      path: item.path,
      name: item.name,
      component: () => import(`../views${item.path}.vue`),
      children:item.children?routeFunc(item.children):[]
    })
  })
  return arr.length>0?route:[]
}
const routes = routeFunc(routeArr)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router