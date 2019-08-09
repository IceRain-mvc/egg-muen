let Service = require('egg').Service;

class UserService extends Service {
  async getUserList(params) {
    let { count, offset } = params;
    count = parseInt(count);
    offset = parseInt(offset * count - count);//1 第1页  2 第二页
    /*
    * 查询数据库
    * */
    let result;
    try {
      result = this.app.mysql.select('user', {
        limit: count,
        offset: offset || 0
      });
    } catch (e) {

      return null;
    }
    return result;
  }
  /*更新用户*/
  async update(body) {
    let { app } = this;
    /*查询*/
    let result = await app.mysql.get('user', {
      userId: body.userId
    });

    /*如果不修改 就使用原来的值*/
    let row = {
      address: body.address || result.address,
      realName: body.realName || result.realName,
      password: this.ctx.helper.hmacUtils(body.password) || result.password,
      phoneNum: body.phoneNum || result.phone,
      userType: body.userType || result.userType,
    };

    let resultUpdate = await app.mysql.update('user', row, {
      where: {
        userId: body.userId
      }
    });

    if (resultUpdate.affectedRows === 1) {
      return 'success';
    } else {
      return null;
    }
  }
  /*删除*/
  async delete(userId) {
    let { app } = this;
    let resultDelete = await app.mysql.delete('user', {
      userId: userId
    });

    if (resultDelete.affectedRows === 1) {
      return {message:"删除成功",code:1};
    } else {
      return {message:"删除失败，没有此用户",code:-1};
    }
  }
  /*搜索用户*/
  async search(oInput) {
    const SQL_QUERY = `
      select * from user 
      where userName = "${oInput}" or realName like "%${oInput}%"
    `;

    let result = await this.app.mysql.query(SQL_QUERY);
    if (result) {
      return result;
    } else {
      return null;
    }

  }
}

module.exports = UserService;
