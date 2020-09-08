const ArticleModel = require('../modules/article')

//文章
class articleController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接收客服端
        let req = ctx.request.body.data;
        if (req.title // 文章标题
            &&
            req.author // 文章作者
            &&
            req.content // 文章内容
            &&
            req.category // 文章分类
        ) {
            try {
                // 创建文章模型
                const ret = await ArticleModel.createArticle(req);
                // 把刚刚新建的文章ID查询文章详情，且返回新创建的文章信息
                const data = await ArticleModel.getArticleDetail(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '新建成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '新建失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '参数不齐全',
            }
        }

    }

    /**
     * 获取文章详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询文章详情模型
                let data = await ArticleModel.getArticleDetail(id);
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
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: '文章ID必须传'
            }
        }
    }

    //获取所有文章
    static async listAll(ctx) {
        try {
            // 查询文章详情模型
            let data = await ArticleModel.getArticleListAll();
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '获取成功',
                data
            }

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '获取失败',
                data
            }
        }
    }

    //修改文章内容
    static async update(ctx) {
        let req = ctx.request.body.data;
        try {
            // 查询文章详情模型
            let data = await ArticleModel.getArticleUpdate(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '修改成功',
            }

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '修改失败',
            }
        }
    }
}

module.exports = articleController