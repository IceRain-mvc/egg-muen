'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    // console.log(this);
    // ctx.body={}

    let message = await ctx.service.login.login();
    console.log('query', ctx);
    ctx.body = message; //context
  }
}

module.exports = LoginController;
