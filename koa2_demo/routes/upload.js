const Router = require('koa-router')
const multer = require('koa-multer')
const path = require('path')
//上传
const goodsController = require('../controllers/goods')


//文件上传
//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split("."); //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})

//加载配置
var upload = multer({
    storage: storage
});


const router = new Router({
    prefix: '/api/v1'
})

//路由
// router.post('/upload', upload.array('avatar', 5), goodsController.uploadGoods)
router.post('/upload', upload.single('file'), async (ctx) => {
    ctx.body = {
        filename: ctx.req.file.filename
    };  //返回数据
 })

module.exports = router