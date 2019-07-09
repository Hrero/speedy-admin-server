const User = require('../model/user');
const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const Utils = require('../function/utils');
class UserController {
    static async saveUser(ctx, next) {
        let req = ctx.request.body;
        try {
            for (const key in req) {
                if (req[key] === undefined || req[key] === "") {
                    throw new ApiError(ApiErrorNames.UserSomeNull)
                }
            }
            let user = await new User({
                name: req.name,
                nickName: req.nickName,
                school: req.school,
                studentNumber: req.studentNumber,
                phoneNumber: req.phoneNumber,
                openId: req.openId,
                headImg: req.headImg,
                sex: req.sex,
                signature: req.signature,
                birthday: req.birthday,
            }).save()
            if (user) {
                ctx.body = {
                    code: 1,
                    data: user,
                    msg: 'success'
                }
            }
        }
        catch(err) {
            ctx.body = {
                code: err.code,
                data: '',
                msg: err.errmsg
            }
            return;
        }
    }
    static async getAllUser(ctx, next) {
        let req = ctx.request.body;
        let pageSize = parseInt(req.pageSize) || 20;
        let pageNum = parseInt(req.pageNum) < 1? 1: req.pageNum;
        let skip = (parseInt(pageNum) - 1) * pageSize;
        let phoneNumber = parseInt(req.phoneNumber);
        let query = {};
        let keyword = '';
        for (let key in req) {
            if (req[key] && ['pageSize', 'pageNum'].indexOf(key) === -1) {
                query[key] = req[key]
            }
        }
        if (query.keyword) {
            keyword = new RegExp(query.keyword, 'i') // 不区分大小写
            try {
            } catch(err) {
                ctx.body = {
                    code: err.code,
                    data: '',
                    msg: err.errmsg
                }
                return;
            }
        }
        let total = await User.find({});
        let res = await User.find({
            $or: [ //多条件，数组
                {
                    nickName: {
                        $regex: keyword
                    } 
                }
            ]
        }).skip(skip).limit(pageSize);
        for (let i=0; i<res.length; i++) {
            res[i]._doc.isFans = Utils.getIsStatus(res[i], 'isFans', ctx.state.userId);
        }
        ctx.body = {
            code: 1,
            data: {
                data: res,
                total: total.length
            },
            msg: 'success'
        }
    }
    static async userDetail(ctx, next) {
        let req = ctx.request.body;
        let userId = req.userId? req.userId: ctx.state.userId;
        try {
            let data = await User.findOne({_id: userId})
            data._doc.isFans = Utils.getIsStatus(data, 'isFans', ctx.state.userId);
            ctx.body = {
                code: 1,
                data: data,
                msg: 'success'
            }
            await next()
        } catch (err) {
            ctx.body = {
                code: err.code,
                data: '',
                msg: err.errmsg
            }
            return;
        }
    }
    static async userUpdate(ctx, next) {
        let req = ctx.request.body;
        let params = {};
        for (const key in req) {
            if (req[key] === undefined || req[key] === "" || req[key] === null) {
                continue;
            } else {
                params[key] = req[key]
            }
        }
        try {
            let res = await User.update({
                _id: ctx.state.userId
            }, 
            {$set: params},
            { upsert: true })
            if (!res.ok) {
                ctx.body = {
                    code: 0,
                    data: {},
                    msg: '更新失败'
                }
            } else {
                ctx.body = {
                    code: 1,
                    data: {
                        ...res,
                        token: ctx.header.authorization
                    },
                    msg: '已更新'
                }
            }
        } catch(err) {
            ctx.body = {
                code: err.code,
                data: '',
                msg: err.errmsg
            }
            return;
        }
    }
}
module.exports = UserController