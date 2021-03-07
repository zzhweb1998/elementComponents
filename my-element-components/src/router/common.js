const routeArr = [
  {
    path: '/form/dynamicContainer',
    name: 'dynamicContainer',
  }, {
    path: '/form/enterForm',
    name: 'enterForm',
  }, {
    path: '/form/recursionContainer',
    name: 'recursionContainer',
  }, {
    path: '/form/verificationContainer',
    name: 'verificationContainer',
  },
  {
    path: '/form/imageContainer',
    name: 'imageContainer',
  },
  {
    path: '/form/goodsContainer',
    name: 'goodsContainer',
  },
  {
    path: '/table/customContainer',
    name: 'customContainer',
  },
  {
    path: '/table/commonlyContainer',
    name: 'commonlyContainer',
  },
  {
    path: '/layout/waterfallContainer',
    name: 'waterfallContainer',
  },
  {
    path: '/test/test1',
    name: 'test1',
  }, 
  {
    path: '/test/webSocket',
    name: 'webSocket',
  },
  {
    path: '/test/login',
    name: 'login',
  },
  {
    path: '/timer/timer',
    name: 'timer', 
  },
  {
    path:'/base/ceshi',
    name:'ceshi',
    children:[
      {
        path:'/base/ceshi2',
        name:'ceshi2',
      }
    ]
  },
]
export default routeArr