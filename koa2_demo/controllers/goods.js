const GoodsModel = require('../modules/goods')

class GoodsController {
    //根据id查询
    static async uploadGoods(ctx) {
        const files = ctx.req.files; //上传过来的文件
        // 服务端通过ctx.query 可以获得前端axios中的params里的数据
        // const data = ctx.query; // 上传的数据
        console.log(ctx.req);
        ctx.body = {msg:ctx.req}
        // try {
        //     let data = await GoodsModel.uploadGoods(files,data);
        //     ctx.response.status = 200;
        //     ctx.body = {
        //         code: 200,
        //         msg: '商品上传成功',
        //         data
        //     }
        // } catch (err) {
        //     ctx.response.status = 412;
        //     ctx.body = {
        //         code: 412,
        //         msg: '商品上传失败',
        //         data
        //     }
        // }
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