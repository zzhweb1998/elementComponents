import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import HelloComponents from './components/HelloComponents'
import dynamicContainer from './components/form/dynamicContainer'
import enterForm from './components/form/enterForm'
import recursionContainer from './components/form/recursionContainer'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloComponents',
      component: HelloComponents
    },
    {
      path: '/dynamicContainer',
      name: 'dynamicContainer',
      component: dynamicContainer
    },
    {
      path: '/enterForm',
      name: 'enterForm',
      component: enterForm
    },
    {
      path: '/recursionContainer',
      name: 'recursionContainer',
      component: recursionContainer
    },
  ]
})