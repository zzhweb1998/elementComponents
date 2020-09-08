const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('../schema/article');
// 自动创建表
Article.sync({
    force: false
});


//文章 
class ArticleModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data) {
        return await Article.create({
            title: data.title, // 文章标题
            author: data.author, // 文章作者
            content: data.content, // 文章内容
            category: data.category, // 文章分类
        })
    }

    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id) {
        return await Article.findOne({
            where: {
                id,
            },
        })
    }

    //获取所有文章
    static async getArticleListAll() {
        return await Article.findAll()
    }

    //修改文章信息
    static async getArticleUpdate(data) {
        /**参数data格式
         * data:{
         *  id:null, //根据id修改
         *  data: {} //修改的数据
         * }
         */
        return await Article.update(data.data, {
            where: {
                id: data.id
            }
        })
    }
}

module.exports = ArticleModel