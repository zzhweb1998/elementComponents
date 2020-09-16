const SocketModel = require('../modules/socket')

class socketController {
    static async openSocket(wss) {
        try {
            wss.on('connection', function connection(ws) {
                ws.on('message', function incoming(message) {
                    ws.send(message);
                });
            });
        } catch (err) {
            console.log(err);
        }
    }

    //查询聊天记录
    static async createSocket(ctx) {
        let req = ctx.request.body.data;
        try {
            let data = await SocketModel.createSocket(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '聊天记录加载成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '聊天记录加载失败',
                data
            }
        }
    }

    //查询聊天记录
    static async searchOr(ctx) {
        let req = ctx.request.body.data;
        try {
            let data = await SocketModel.searchOr(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '聊天记录加载成功',
                data
            }

        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '聊天记录加载失败',
                data
            }
        }
    }
}
module.exports = socketController
// module.exports = wss => {
//     wss.on('connection', function connection(ws) {
//         ws.on('message', function incoming(message) {
//             console.log('received: %s', message);
//             ws.send(message);
//         });
//     });
// }

// 1、安装ws：npm install ws --save
// 2、 设置ws和koa共享同一个接口：
/**
 * 封装ws：
 * module.exports = wss => {
        wss.on('connection', function connection(ws) {
            ws.on('message', function incoming(message) {
                console.log('received: %s', message);
                ws.send("返回数据："+message);
            });
        });
    }

    ../bin/www文件加入一下配置
    const WebSocket = require('ws');
    const WebSocketApi = require('./util/ws');//引入封装的ws模块
    const wss = new WebSocket.Server({// 同一个端口监听不同的服务
        server
    });
    WebSocketApi(wss)

    参考文档：https://www.w3cways.com/2373.html
 */