'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    let body = ctx.request.body;

    //类型验证
    try {
      ctx.validate({ userName: 'string', realName: 'string', password: 'string'});
    } catch (e) {
      console.info(e);
      ctx.status = 422;
      ctx.body = {
        message: '参数错误',
        code: -1
      };
      return;
    }

    //结果
    let result = await ctx.service.user.login.register(body);

    //如果插入失败
    if (result.code === -1) {
      ctx.status = 422;
      ctx.body = {
        message: result.message,
        code: -1,
      };
      return;
    }

    //成功
    ctx.status = 200;
    ctx.body = result;
  }


  async login() {
    const { ctx } = this;
    // console.log(this);
    // ctx.body={}
    let body = ctx.request.body;
    ctx.validate({userName:"string", password: 'string'})
    let json = {
      userName: body.userName,
      password: body.password
    };
    /*
    * 存储到数据库  userId  token  username
    * */
    let message = await ctx.service.user.login.login(json);
    ctx.status = 200;
    ctx.body = message; //context
  }
}

module.exports = LoginController;
