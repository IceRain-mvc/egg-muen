'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  /************************用户******************************/
  /*登录*/
  router.post('/login', controller.user.login.login);
  /*注册*/
  router.post('/register', controller.user.login.register);
  /*请求所有用户*/
  router.get('/user', jwt, controller.user.user.userList);
  /*删除用户*/
  router.post('/user/delete', jwt, controller.user.user.delete);
  /*修改用户*/
  router.post('/user/update', jwt, controller.user.user.update);
  /*搜索用户*/
  router.get('/user/search', jwt, controller.user.user.search);
  /*设置权限 接口暂未开放*/
  router.post('/user/setType', jwt, controller.user.user.setType);
  // router.get('/qiniu/uptoken', controller.qiniu.getUpToken);
  // router.get('/qiniu/delete', controller.qiniu.deleteFile);

  /************************小组******************************/
  router.post('/group/add', jwt, controller.group.group.addGroup);
  router.post('/group/delete', jwt, controller.group.group.deleteGroup);
  router.post('/group/update', jwt, controller.group.group.updateGroup);
  router.get('/group/list', jwt, controller.group.group.groupList);
  router.get('/group/members', jwt, controller.group.groupMembers.searchGroupMembers);


  router.redirect('/', '/public/test.html', 302);//测试 上线后重定向到index.html


  /*七牛云接口*/
  router.get('/qiniu/uptoken', controller.qiniu.qiniu.upToken);
  router.delete('/qiniu/deleteFile', controller.qiniu.qiniu.deleteFile);

  /************************投票*******************************/
  router.post('/vote/newvote', jwt, controller.vote.upload);
  router.get('/vote/allVote', jwt, controller.vote.allVote);


};
