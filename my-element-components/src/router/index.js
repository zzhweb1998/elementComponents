import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HelloComponents',
    component: () => import( '../views/HelloComponents.vue')
  },
  {
    path: '/dynamicContainer',
    name: 'dynamicContainer',
    component: () => import( '../views/form/dynamicContainer.vue')
  },{
    path: '/enterForm',
    name: 'enterForm',
    component: () => import( '../views/form/enterForm.vue')
  },{
    path: '/recursionContainer',
    name: 'recursionContainer',
    component: () => import( '../views/form/recursionContainer.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
