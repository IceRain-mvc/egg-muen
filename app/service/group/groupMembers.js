'use strict';

const Service = require('egg').Service;

class GroupMemberService extends Service {

  /*
  * 查询小组成员
  * */
  async searchGroupMembers(params) {

    let { count, offset, groupId } = params;
    count = parseInt(count);
    offset = parseInt(offset * count - count);//1 第1页  2 第二页

    const QUERY_SQL = 'select `user`.userId,' +
      '`user`.userName,`user`.realName,`user`.phoneNum,' +
      '`user`.address,`group`.groupName ' +
      'from `group` left join user on `group`.groupId = `user`.groupId ' +
      'where `group`.groupId = ' + `${groupId} limit ${offset || 0}, ${count||1000}`;

    /*
    * 查询数据库
    * */
    let result;
    try {
      result = await this.app.mysql.query(QUERY_SQL);
    } catch (e) {
      console.error(e);
      return null;
    }
    return result;
  }

  /*
* 删除小组成员
* */
  async deleteGroupMembers() {

  }

}

module.exports = GroupMemberService;
