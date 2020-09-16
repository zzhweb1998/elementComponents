const Router = require('koa-router')
//文章
const SocketController = require('../controllers/socket')

const router = new Router({
    prefix: '/api/v1'
})

// 创建接口（路由）
//生成聊天记录
router.post('/socket/createSocket', SocketController.createSocket);
//查找聊天记录
router.post('/socket/searchOr', SocketController.searchOr);

module.exports = router