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
      info: obj.info,
      userId: obj.userId,
      createTime: new Date(),
      anonymity: obj.anonymity,
      isSingle: obj.isSingle

    });

    if (result.affectedRows === 1) {

      // obj.votelist.forEach((item) => {
      //   let result = app.mysql.query('votelist', {
      //     title: obj.title,
      //     content: obj.content,
      //     userId: obj.userId
      //   });
      // });

      // app.mysql.beginTransition();

      for (let i = 0; i < obj.chooseList.length; i++) {
        const item = obj.chooseList[ i ];
        app.mysql.insert('choose', {
          voteId: result.insertId,
          chooseContent: item,
          totalNum: 0
        });
      }


      return {
        message: '发表成功',
        code: 1
      };
      // } else {
      //   return 'fail';
      // }
    }else {
      return {
        message: '发表失败，可能是数据库原因',
        code: -1
      }
    }

  }

  async getAllVoteList(query) {
    //1:获取所有投票
    //2:投票的选项
    //3:返回在json数据中

    let { count, offset} = query;
    count = parseInt(count);
    offset = parseInt(offset * count - count);//1 第1页  2 第二页

    const VOTE_LIST_ALL = `select vote.title, 
    vote.info, vote.userId ,vote.voteId ,choose.chooseContent ,choose.chooseId,choose.totalNum 
    from vote 
    left join choose 
    on 
    vote.voteId=choose.voteId 
    limit ${offset || 0}, ${count||1000}
    `;

    let result = await this.app.mysql.query(VOTE_LIST_ALL);
    if (!result) {
      return { message: '无内容',code:-1};
    }

    let newResult = [];

    result.forEach((item) => {
      //{title,userid,voteid}

      for (let i = 0; i < newResult.length; i++) {
        if (newResult[ i ].voteId === item.voteId) {
          newResult[ i ].choose.push(
            { content: item.chooseContent, chooseId: item.chooseId }
          );
          return;
        }
      }
      newResult.push({
        voteId: item.voteId,
        title: item.title,
        userId: item.userId,
        choose: [
          { content: item.chooseContent, chooseId: item.chooseId, totalNum: item.totalNum }
        ]
      });
    });

    console.log(newResult);
    return newResult;

  }
}

module.exports = VoteService;
