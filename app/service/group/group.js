'use strict';

const Service = require('egg').Service;

class GroupService extends Service {
  /*
  * 添加小组
  * */
  async addGroup(body) {
    let result = await this.app.mysql.insert('group', {
      groupName: body.groupName,
      groupPersonNum: body.groupPersonNum,
      leaderUserName: body.leaderUserName,
      groupIcon: body.groupIcon || 'http://img0.imgtn.bdimg.com/it/u=2240033465,1427047201&fm=26&gp=0.jpg',
    });

    if (result.affectedRows === 1) {
      return { message: 'success', code: 1 };
    } else {
      return { message: 'fail', code: -1 };
    }
  }
  /*
  * 编辑小组
  * */
  async updateGroup(body) {

    let { app } = this;
    let result = await app.mysql.get('group', {
      groupId: body.groupId
    });

    let row = {
      groupName: body.groupName|| result.groupName,
      groupPersonNum: body.groupPersonNum|| result.groupPersonNum,
      declaration: body.declaration||result.declaration,
      leaderUserName: body.leaderUserName|| result.leaderUserName,
      groupIcon: body.groupIcon|| result.groupIcon,
    };

    let resultUpdate = await app.mysql.update('group', row, {
      where: {
        groupId: body.groupId
      }
    });

    if (resultUpdate.affectedRows === 1) {
      return {
        message: '修改成功',
        code: 1
      };
    } else {
      return {
        message: '修改失败,可能是数据库原因',
        code: -1
      };
    }
  }

  /*
  * 删除小组
  * */
  async deleteGroup(groupId) {
    let result = await this.app.mysql.delete('group', {
      groupId
    });

    if (result.protocol41) {
      return {
        message: 'success',
        code: 1
      };
    } else {
      return {
        message: 'fail',
        code: -1
      };
    }

  }
  /*
  * 查询小组
  * */
  async groupList(params) {
    let { count, offset } = params;
    count = parseInt(count);
    offset = parseInt(offset * count - count);//1 第1页  2 第二页
    /*
    * 查询数据库
    * */
    let result;
    try {
      result = this.app.mysql.select('group', {
        limit: count,
        offset: offset || 0
      });
    } catch (e) {

      return null;
    }
    return result;

  }
}

module.exports = GroupService;
