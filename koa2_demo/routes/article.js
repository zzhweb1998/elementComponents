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
// 创建文章接口（路由）
router.post('/article', ArticleController.create);
// 获取文章详情接口（路由）
router.get('/article/:id', ArticleController.detail);
//获取所有文章接口
router.get('/listAll', ArticleController.listAll);
//修改文章信息接口
router.get('/update', ArticleController.update);
module.exports = router
