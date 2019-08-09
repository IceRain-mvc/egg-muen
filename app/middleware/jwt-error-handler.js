module.exports = (options, app) => {
  return async function(ctx,next) {
    try {
      await next();
    }catch (e) {

      if (
        ctx.path.includes('unauthorerror') &&
        e instanceof app.jwt.UnauthorizedError
      ) {
        ctx.status = 401;
        ctx.body = {
          msg: '权限错误',
          code: -2
        };
        return;

      }
      console.error(e);
      throw e;

      /*
      *
      * if (
      * ctx.path.includes('unauthorerror') &&
      * err instanceof app.jwt.UnauthorizedError
      * ) {
      * ctx.status = 200;
      * ctx.body = 'UnauthorizedError';
      * return;
      * }
      * throw err;
      *
      *
      * */
    }

  };
};
