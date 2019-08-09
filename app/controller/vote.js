let Controller = require('egg').Controller;

class VoteController extends Controller {
  async upload() {
    //1:接收参数
    //  参数校验
    //2:传递到service
    //3:连接数据库
    //4:增加到数据库
    //5:返回信息
    //6:处理token

    let { ctx, app } = this;
    let body = ctx.request.body;


    let token = ctx.header.authorization;
    console.log(token);
    let payload;
    if (token) {
      payload = await app.jwt.verify(token.split(' ')[ 1 ], 'bao');
      try {
        ctx.validate({ title: 'string', userId: 'string', votelist: 'array' });
      } catch (e) {
        ctx.status = 422;
        ctx.body = { msg: '验证失败 参数不正确' };
        return;
      }


      let result = await ctx.service.vote.push(body);

      ctx.status = 200;
      ctx.body = { msg: result,payload, code: 200 };
    }
  }


  async allvote() {
    let { ctx } = this;
    let result = await ctx.service.vote.getAllVoteList();

    if (!result) {
      ctx.status = 500;
      ctx.body = { msg: '服务器内部错误' };
    }
    ctx.status = 200;
    ctx.body = result;

  }
}

module.exports = VoteController;