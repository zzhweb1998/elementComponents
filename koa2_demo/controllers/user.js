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
}
module.exports = UserController