const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const Socket = Sequelize.import('../schema/socket');
//引入sequelize
const seq = require('sequelize');
//引入sequelize的Op进行模糊查找
const Op = seq.Op;
// 自动创建表
Socket.sync({
    force: false
});

class SocketModel{
    //开启socket
    static async createSocket(data) {
        return await Socket.create({
            sender_id: data.sender_id, // 发送者id
            sender_name: data.sender_name, // 发送者名称
            receive_id: data.receive_id, // 接受者id
            receive_name: data.receive_name, // 接受者名称
            content: data.content //发送
        })
    }

    //or查询
    static async searchOr(data) {
        return await Socket.findAll({
            where:{
                [Op.or]:[
                    {
                        sender_id: data.sender_id,
                        receive_id: data.receive_id
                    },
                    {
                        sender_id: data.receive_id,
                        receive_id: data.sender_id
                    }
                ]
            }
        })
    }
}

module.exports = SocketModel