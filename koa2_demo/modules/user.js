const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const User = Sequelize.import('../schema/user');
//引入sequelize
const seq = require('sequelize');
//引入sequelize的Op进行模糊查找
const Op = seq.Op;
// 自动创建表
User.sync({
    force: false
});

class UserModel {
    //根据id查询
    static async getUserDetail(id) {
        return await User.findOne({
            where: {
                id: parseInt(id),
            },
        })
    }

}

module.exports = UserModel