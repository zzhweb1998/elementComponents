//引入表模块
const ArticleModel = require('../modules/article')
//引入fs模块
const fs = require('fs')
//引入excel模块
var excelPort = require('excel-export');


const write = function (datas) {
    //定义一个对象，存放内容
    var conf = {};
    //定义表头
    conf.cols = [{
            caption: 'id',
            type: 'number',
        },
        {
            caption: '标题',
            type: 'string',
            width:80
        },
        {
            caption: '作者',
            type: 'string',
        },
        {
            caption: '内容',
            type: 'string',
            width:120
        },
        {
            caption: '分类',
            type: 'string',
        },
    ];
    //创建一个数组用来多次遍历行数据
    var array = [];
    // 循环导入从数据库中获取的表内容
    for (var i = 0; i < datas.length; i++) {
        //依次写入
        array[i] = [
            datas[i].id,
            datas[i].title,
            datas[i].author,
            datas[i].content,
            datas[i].category
        ];
    }
    console.log(array);
    //写入道conf对象中
    conf.rows = array;
    //生成表格
    console.log(conf);
    var result = excelPort.execute(conf);
    // 定义表格存放路径
    let filename = Date.now()+'.xlsx'
    fs.writeFile('public/util/'+filename, result, 'binary', function (err) {
        if (err) {
            console.log(err);
        }
    });
    return 'http://localhost:3000/util/'+filename;
}

class excelController {
    static async excel(ctx) {
        try {
            let data = await ArticleModel.getArticleListAll();
            console.log(data);
            // 把数据传个datas
            const url = write(data)
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '生成excel成功',
                data:{
                    url
                }
            }
        } catch (err) {
            ctx.response.status = 412;
            console.log(err);
            ctx.body = {
                code: 412,
                msg: '生成excel失败',
            }
        }
    }
}

module.exports = excelController