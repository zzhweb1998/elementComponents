const moment = require('moment');

//文章（数据模型）
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        // 用户ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 用户名称
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'name',
        },
    }, {
        //启用该配置后会自动添加createdAt、updatedAt两个字段，分别表示创建和更新时间
        timestamps:true,
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}