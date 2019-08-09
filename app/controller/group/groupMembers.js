'use strict';

const Controller = require('egg').Controller;

class GroupMemberController extends Controller {

  /*
  * 查询小组成员
  * */
  async searchGroupMembers() {
    let { ctx } = this;
    // try {
    //   // ctx.validate({ groupId: 'string', count: 'string', offset: 'string'});
    //
    //
    // } catch (e) {
    //   console.error(e);
    //   ctx.status = 422;
    //   ctx.body = {
    //     message: '参数错误',
    //     code: -1
    //   };
    //   return
    // }field
    let result = await ctx.service.group.groupMembers.searchGroupMembers(ctx.query);
    ctx.body = {
      code: 1,
      result
    }

  }

  /*
* 删除小组成员
* */
  async deleteGroupMembers() {

  }

}

module.exports = GroupMemberController;
