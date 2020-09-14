const moment = require('moment');

//文章（数据模型）
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('socket', {
        // 信息ID
        id: {
            type: DataTypes.INTEGER, //字段类型
            primaryKey: true, //是否为主键
            allowNull: true, //是否允许为空
            autoIncrement: true, //自动增加
        },
        // 发送人id
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // 发送人姓名
        sender_name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        // 接收人id
        receive_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // 接收人姓名
        receive_name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        // 发送的信息
        content: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW, //默认值
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}