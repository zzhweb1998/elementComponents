const Router = require('koa-router')

const UserController = require('../controllers/user')

const router = new Router({
    prefix: '/api/v1'
})

// 接口（路由）
router.get('/user', UserController.searchUser);

module.exports = router