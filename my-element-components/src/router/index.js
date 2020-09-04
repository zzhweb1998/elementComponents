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
    path: '/form/dynamicContainer',
    name: 'dynamicContainer',
    component: () => import( '../views/form/dynamicContainer.vue')
  },{
    path: '/form/enterForm',
    name: 'enterForm',
    component: () => import( '../views/form/enterForm.vue')
  },{
    path: '/form/recursionContainer',
    name: 'recursionContainer',
    component: () => import( '../views/form/recursionContainer.vue')
  },{
    path: '/form/verificationContainer',
    name: 'verificationContainer',
    component: () => import( '../views/form/verificationContainer.vue')
  },
  {
    path: '/table/pagingContainer',
    name: 'pagingContainer',
    component: () => import( '../views/table/pagingContainer.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
