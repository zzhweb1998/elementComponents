import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import HelloComponents from './components/HelloComponents'
import customForm from './components/form/customForm'
import enterForm from './components/form/enterForm'
import recursionForm from './components/form/recursionForm'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloComponents',
      component: HelloComponents
    },
    {
      path: '/customForm',
      name: 'customForm',
      component: customForm
    },
    {
      path: '/enterForm',
      name: 'enterForm',
      component: enterForm
    },
    {
      path: '/recursionForm',
      name: 'recursionForm',
      component: recursionForm
    },
  ]
})