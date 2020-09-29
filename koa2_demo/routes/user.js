const Router = require('koa-router')

const UserController = require('../controllers/user')

const router = new Router({
    prefix: '/api/v1'
})

// 接口（路由）
router.get('/user', UserController.searchUser);
//登陆接口
router.post('/user/login', UserController.login);
//注册接口
router.post('/user/register', UserController.register);

module.exports = router