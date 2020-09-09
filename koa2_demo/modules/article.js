const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Article = Sequelize.import('../schema/article');
//引入sequelize
const seq = require('sequelize');
//引入sequelize的Op进行模糊查找
const Op = seq.Op;
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
                id: parseInt(id),
            },
        })
    }

    //获取所有文章
    static async getArticleListAll() {
        return await Article.findAll()
    }

    //修改文章信息
    static async updateArticle(data) {
        /**参数data格式
         * data:{
         *  id:null, //根据id修改
         *  data: {} //修改的数据
         * }
         */
        return await Article.update({
            ...data.data
        }, {
            where: {
                id: parseInt(data.id)
            }
        })
    }

    //删除文章数据
    static async delArticle(id) {
        return await Article.destroy({
            where: {
                id: parseInt(id)
            }
        })
    }

    //分页查询
    static async page(data) {
        return await Article.findAndCountAll({
            where: '', //条件
            offset: (data.page - 1) * data.limit, //每页起始位置
            limit: parseInt(data.limit) //每页的数据条数
        })
    }

    //分模糊查询
    static async fuzzy(data) {
        return await Article.findAndCountAll({
            where: {
                title: {
                    [Op.like]: '%' + data.data.title + '%',
                }
            }, //条件
            offset: (data.page - 1) * data.limit, //每页起始位置
            limit: parseInt(data.limit) //每页的数据条数
        })
    }

    //数据排序
    static async order(data) {
        let order;
        if (data.order === 1) {
            order = 'DESC'
        } else {
            order = 'ASC'
        }
        return await Article.findAll({
            order: [
                ['id', order]
            ],
            where: {}, //条件
        })
    }

    //指定查询
    static async assign() {
        return await Article.findAll({
            //查询排除title以外的其他字段
            // attributes: { 
            //     exclude: ["title"],
            // },
            //只查询id这个字段
            attributes: ["title"]
        })
    }
}

module.exports = ArticleModel