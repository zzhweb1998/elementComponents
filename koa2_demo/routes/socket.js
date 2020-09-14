const Router = require('koa-router')
//文章
const SocketController = require('../controllers/socket')

const router = new Router({
    prefix: '/api/v1'
})

// 创建接口（路由）
router.post('/socket/searchOr', ArticleController.searchOr);

module.exports = router