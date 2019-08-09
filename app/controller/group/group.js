'use strict';

const Controller = require('egg').Controller;

class GroupController extends Controller {
  /*
  * 添加小组
  * */
  async addGroup() {

    /* `groupId` int(11) NOT NULL,
       `groupName` varchar(255) NOT NULL,
       `groupPersonNum` int(255) NOT NULL,
       `declaration` varchar(255) DEFAULT NULL,
       `leaderUserName` int(11) NOT NULL,
       `groupIcon` varchar(255) NOT NULL,*/

    let { ctx } = this;
    try {
      ctx.validate({
        groupName: 'string',
        groupPersonNum: 'number',
        leaderUserName: 'string',
        groupIcon: 'string'
      });

    } catch (e) {
      console.error(e);
      ctx.status = 422;
      ctx.body = {
        code: -1,
        message: '参数错误'
      };
      return;
    }

    ctx.body = await ctx.service.group.group.addGroup(ctx.request.body);


  }

  /*
  * 编辑小组
  * */
  async updateGroup() {
    let { ctx } = this;
    try {
      ctx.validate({ groupId: 'number' });
    } catch (e) {
      ctx.status = 422;
      ctx.body = {
        code: -1,
        'message': '参数错误'
      };
    }
    let result = await ctx.service.group.group.updateGroup(ctx.request.body);
    ctx.body = result;
  }

  /*
  * 删除小组
  * */
  async deleteGroup() {
    let { ctx } = this;
    ctx.body = await this.service.group.group.deleteGroup(ctx.request.body.groupId);
  }

  /*
  * 查询小组
  * */

  async groupList() {
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
    let result = await ctx.service.group.group.groupList(ctx.query);
    if (!result) {
      ctx.status = 500;
      ctx.body = { message: '服务器错误', code: -1 };
      return;
    }
    ctx.body = { message: 'success', result };
  }
}

module.exports = GroupController;
