'use strict';

/*七牛云对象*/
var qiniu = require('qiniu');

/*关联配置文件*/
var fs = require('fs');
var path = require('path');

var config_qiniu = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'config.json')));

var mac = new qiniu.auth.digest.Mac(config_qiniu.AccessKey, config_qiniu.SecretKey);

var options = {
  scope: config_qiniu.Bucket,//空间的名字
  deleteAfterDays: 1,
  returnBody:
    '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
};

const Controller = require('egg').Controller;

/*设置的对象*/
var putPolicy = new qiniu.rs.PutPolicy(options);

class HomeController extends Controller {
  async upToken() {
    let { ctx } = this;
    var token = putPolicy.uploadToken(mac);
    if (token) {
      ctx.body = {
        uptoken: token,
        domain: config_qiniu.Domain
      };
    } else {
      ctx.body = {
        message: '生成token失败',
        code: -1
      };
    }
  }


  async deleteFile() {
    let { ctx } = this;

    let key = ctx.query.key;

    var config = new qiniu.conf.Config();
    //config.useHttpsDomain = true;
    config.zone = qiniu.zone.Zone_z0;
    var bucketManager = new qiniu.rs.BucketManager(mac, config);


    let result = await new Promise((resolve, reject) => {
      bucketManager.delete(config_qiniu.Bucket, key, function(err, respBody, respInfo) {
        if (err) {
          let body = {
            message: '删除失败',
            code: -1
          };
          reject(body);

        } else {

          let body = {
            message: '删除成功',
            code: 1
          };
          resolve(body);
        }
      });
    });

    if (result.code === -1) {
      ctx.status = 500;
    } else {
      ctx.status = 200;

    }
    ctx.body =result;
  }

}

module.exports = HomeController;
