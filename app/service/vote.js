let Service = require('egg').Service;

const SQL_INSERT_PUSH_TITLE = 'insert into vote values(?,?,?)';
const SQL_INSERT_PUSH_CONTENT = 'insert into vote values(?,?,?)';

class VoteService extends Service {
  async push(obj) {
    console.log(obj);
    let { app } = this;

    /*insert 插入  get 查询 一条 select:条件查询 update :更新数据  delete 删除数据  query 直接执行sql语句  事务*/
    let result = await app.mysql.insert('vote', {
      title: obj.title,
      content: obj.content,
      userId: obj.userId
    });

    console.log(result);
    if (result.affectedRows === 1) {

      // obj.votelist.forEach((item) => {
      //   let result = app.mysql.query('votelist', {
      //     title: obj.title,
      //     content: obj.content,
      //     userId: obj.userId
      //   });
      // });

      // app.mysql.beginTransition();

      for (let i = 0; i < obj.votelist.length; i++) {
        const item = obj.votelist[ i ];
        app.mysql.insert('votelist', {
          voteid: result.insertId,
          content: item
        });
      }


      return 'success';
      // } else {
      //   return 'fail';
      // }
    }

  }

  async getAllVoteList() {
    //1:获取所有投票
    //2:投票的选项
    //3:返回在json数据中

    const VOTE_LIST_ALL = `select vote.title, 
    vote.content, vote.userid ,vote.voteid ,votelist.content ,votelist.chooseid 
    from vote 
    left join votelist 
    on 
    vote.voteid=votelist.voteid`;

    let result = await this.app.mysql.query(VOTE_LIST_ALL);
    if (!result) {
      return null;
    }

    let newResult = [];

    result.forEach((item) => {
      //{title,userid,voteid}

      for (let i = 0; i < newResult.length; i++) {
        if (newResult[ i ].voteid === item.voteid) {
          newResult[ i ].choose.push(
            { content: item.content, chooseid: item.chooseid }
          );
          return;
        }
      }
      newResult.push({
        voteid: item.voteid,
        title: item.title,
        userid: item.userid,
        choose: [
          { content: item.content, chooseid: item.chooseid }
        ]
      });
    });

    console.log(newResult);
    return newResult;

  }
}

module.exports = VoteService;
