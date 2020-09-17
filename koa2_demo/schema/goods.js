const moment = require('moment');

//文章（数据模型）
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('goods', {
        // 商品ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 商品名称
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'name',
        },
        // 商品价格
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            field: 'price'
        },
        // 商品介绍
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'content'
        },
        // 商品分类
        category: {
            type: DataTypes.STRING(10),
            allowNull: false,
            field: 'category'
        },
        // 商品图片
        image: {
            type: DataTypes.STRING(200),
            allowNull: false,
            field: 'image'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}