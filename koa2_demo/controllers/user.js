const UserModel = require('../modules/user')

class UserController {
    //根据id查询
    static async searchUser(ctx) {
        let req = ctx.request.body.data.id;
        try {
            let data = await UserModel.getUserDetail(req);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: '查询成功',
                data
            }
        } catch (err) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: '查询失败',
                data
            }
        }
    }
    //登陆
    static async login(ctx) {
        let req = ctx.request.body.data;
        try {
            let data = await UserModel.accountQuery(req.account);
            if (data.password == req.password) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '登陆成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '密码错误',
                }
            }
        } catch (err) {
            ctx.response.status = 200;
            ctx.body = {
                code: 412,
                msg: '账号有误',
            }
        }
    }
    //创建账号
    static async register(ctx) {
        let req = ctx.request.body.data;
        try {
            let data = await UserModel.accountQuery(req.account);
            if (!data) {
                console.log(111);
                let data = await UserModel.register(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '注册成功',
                }
            } else {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '改账号已被注册',
                    data
                }
            }

        } catch (err) {
            ctx.response.status = 200;
            ctx.body = {
                code: 412,
                msg: '注册失败',
            }
        }
    }
}
module.exports = UserController