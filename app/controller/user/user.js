let Controller = require('egg').Controller;

class UserController extends Controller {

  /*获取所有用户*/
  async userList() {
    let { ctx } = this;

    /*
    * 1:获取参数  count : 每页显示数量  offset:第几页
    *   条件查询
    * 2:请求service
    * 3:
    * 4:返回json
    * */
    let { count, offset } = ctx.query;
    try {
      parseInt(count);
      parseInt(offset);
    } catch (e) {
      ctx.body = {
        message: '参数类型不对',
        code: -1
      };
      return;
    }
    let result = await ctx.service.user.user.getUserList(ctx.query);
    if (!result) {
      ctx.status = 500;
      ctx.body = { message: '服务器错误', code: -1 };
      return;
    }
    ctx.body = { message: 'success', result };
  }

  /*删除用户*/
  async delete() {
    let { ctx } = this;

    ctx.validate({
      userId: {
        type: 'string'
      }
    });

    let userId = ctx.request.body.userId;

    let result = await ctx.service.user.user.delete(userId);
    if (!result) {
      ctx.status = 500;
      ctx.body = {
        message: '服务器内部错误',
        code: -1
      };
      return;
    }

    ctx.status = 200;
    ctx.body = {
      message: 'success',
      code: 1
    };
  }

  /*更新用户*/
  async update() {
    let { ctx } = this;
    console.log('query', ctx.request.body);
    try {
      ctx.validate({ userId: 'string' });
    } catch (e) {
      ctx.status = 422;
      ctx.body = {
        code: -1,
        'message': '参数错误'
      };

    }
    let result = await ctx.service.user.user.update(ctx.request.body);
    if (!result) {
      ctx.status = 500;
      ctx.body = {
        code: -1,
        message: '服务器内部错误'
      };
      return;

    }

    ctx.status = 200;
    ctx.body = {
      code: 1,
      message: '修改成功'
    };
  }

  /*搜索用户*/
  async search() {
    let { ctx } = this;

    let oInput = ctx.query.input;
    let result = await ctx.service.user.user.search(oInput);
    ctx.body = {
      message: 'success',
      code: 1,
      result
    };

  }

  /*设置权限*/
  async setType() {
    let { ctx } = this;
    console.log('query', ctx.query);
    ctx.body = {
      code: -1,
      message: '接口已关闭'

    };
  }

}

module.exports = UserController;
