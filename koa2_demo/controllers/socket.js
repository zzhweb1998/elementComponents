module.exports = wss => {
    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
            ws.send(message);
        });
    });
}

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