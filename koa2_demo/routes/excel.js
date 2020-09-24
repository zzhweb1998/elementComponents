const Router = require('koa-router')

const ExcelController = require('../controllers/excel')

const router = new Router({
    prefix: '/api/v1'
})

// 导出excel接口（路由）
router.get('/excel/export', ExcelController.excel);

module.exports = router