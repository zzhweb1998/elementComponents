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
        cb(null, '../koa2_demo/public/images/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        console.log(req.files);
        var fileFormat = (file.originalname).split("."); //以点分割成数组，数组的最后一项就是后缀名
        // cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
        cb(null, Date.now()+"."+fileFormat[fileFormat.length - 1]);
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
router.post('/upload', upload.array('files'), goodsController.uploadImage)
router.post('/upload/image', upload.array('file'), goodsController.uploadImage)

module.exports = router