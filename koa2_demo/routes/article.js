const Router = require('koa-router')
//文章
const ArticleController = require('../controllers/article')

const router = new Router({
    prefix: '/api/v1'
})

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

/**
 * 文章接口
 */
// 创建接口（路由）
router.post('/article', ArticleController.create);
// 获取详情接口（路由）
router.get('/article/:id', ArticleController.detail);
//获取所有数据接口
router.get('/listAll', ArticleController.listAll);
//修改接口
router.get('/update', ArticleController.update);
//删除接口
router.get('/delete/:id', ArticleController.delete);
//分页查询接口
router.post('/pagQuery', ArticleController.pagQuery);
//模糊查询接口
router.post('/fuzzyQuery', ArticleController.fuzzyQuery);
//排序接口
router.post('/orderData', ArticleController.orderData);
//指定查询接口
router.get('/assignQuery', ArticleController.assignQuery);

module.exports = router
