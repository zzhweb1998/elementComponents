const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Goods = Sequelize.import('../schema/goods');
const User = Sequelize.import('../schema/user');
//引入sequelize
const seq = require('sequelize');
//引入sequelize的Op进行模糊查找
const Op = seq.Op;
// 自动创建表
Goods.sync({
    force: false
});

// 外键关联
Goods.belongsTo(User,{
    // 创建外键 Goods.userId -> User.id 是一个多对一的关系。
    foreignKey: 'userId'
})

class GoodsModel {
    //根据id查询
    static async uploadGoods(data) {
        console.log(data);
        if (data.id != 0) {
            //修改
            return await Goods.update({
                name: data.name,
                price: data.price,
                content: data.content,
                category: data.category,
                image: data.image,
            }, {
                where: {
                    id: parseInt(data.id)
                }
            })
        } else {
            //创建
            return await Goods.create({
                name: data.name,
                price: data.price,
                content: data.content,
                category: data.category,
                image: data.image,
            })
        }
    }

    //根据id查询
    static async getGoodsDetail(id) {
        return await Goods.findOne({
            where: {
                id: parseInt(id),
            },
        })
    }

}

module.exports = GoodsModel