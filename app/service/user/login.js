let Service = require('egg').Service;

// const crypto = require('crypto');

// const hash = crypto.createHash('md5');
//Hmac加密算法
class LoginService extends Service {
  async login(body) {
    // 获取数据  连接数据库 增删改查 ....

    //登录签名  (加签)
    let { app } = this;
    /*
    * 1:判断用户名和密码对不对
    *
    * 2:如果对 返回token  并修改数据库
    *
    *   如果不对 返回错误信息
    * */

    let result = await app.mysql.get('user', { userName: body.userName });
    console.log(result);
    if (!result) {
      return {
        code: -1,
        message: '没有这个用户'
      };
    }

    if (this.ctx.helper.hmacUtils(body.password) === result.password) {
      let token = app.jwt.sign(body, app.keys[ 0 ], { expiresIn: `${24 * 365}h` });
      app.mysql.update('user', {
          token
        }, {
          where: {
            userId: result.userId
          }
        }
      );
      return {
        message: 'success',
        userName: result.userName,
        realName: result.realName,
        createTime: result.createTime,
        groupId: result.groupId,
        userType: result.userType,
        phoneNum: result.phoneNum || '',
        address: result.address || '',
        userIcon: result.userIcon,
        token,
        code: 1
      };

    } else {
      return {
        message: '密码不正确',
        code: -1
      };
    }


  }

  async register(body) {
    let { app } = this;

    let result = null;
    // const hmac = crypto.createHmac('sha256', app.keys[0]);
    // hmac.update(body.password);
    // let pwdHmac = hmac.digest('hex');
    let pwdHmac = this.ctx.helper.hmacUtils(body.password);
    app.jwt.sign(body, app.keys[ 0 ], { expiresIn: `${24 * 365}h` });
    try {
      result = await app.mysql.insert('user', {
        userName: body.userName,
        realName: body.realName,
        phoneNum: body.phoneNum || '',
        address: body.address || '',
        createTime: new Date(),
        userType: body.userType || 3,
        userIcon: body.userIcon || 'http://img.sj33.cn/uploads/allimg/201611/7-1611010T648.jpg',
        password: pwdHmac
      });
    } catch (e) {
      console.error(e);
      return { 'message': '此用户名已被使用', code: -1 };
    }

    if (result.affectedRows === 1) {
      return { message: 'success', code: 1 };
    } else {
      return null;
    }
  }
}

module.exports = LoginService;
