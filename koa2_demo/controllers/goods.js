const GoodsModel = require('../modules/goods')

class GoodsController {
    //根据id查询
    static async uploadGoods(ctx) {
        const files = ctx.req.files; //上传过来的文件
        let req= ctx.query; // 上传的数据
        let images = files.map(item => {
            return {
                name: item.filename
            }
        })
        req.image = JSON.stringify(images)

        try {
            let data = await GoodsModel.uploadGoods(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '商品上传成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '商品上传失败',
            }
        }
    }


    //根据id查询
    static async searchGoods(ctx) {
        let req = ctx.request.body.data.id;
        try {
            let data = await GoodsModel.getGoodsDetail(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '查询成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '查询失败',
                data
            }
        }
    }

}
module.exports = GoodsController