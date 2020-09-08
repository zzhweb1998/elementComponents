module.exports = {
    devServer: {
        port: "8080",//代理端口
        open: false,//项目启动时是否自动打开浏览器，我这里设置为false,不打开，true表示打开
        proxy: {
            '/api/v1': {//代理api
                target: "http://localhost:3000",//服务器api地址
                changeOrigin: true,//是否跨域
                ws: true, // proxy websockets
                pathRewrite: {//重写路径
                    "^/api/v1": '/api/v1'
                }
            }
        }
    }
}