/* eslint valid-jsdoc: "off" */

'use strict';

// exports.security = {
//   csrf: {
//     enable: false
//   },
// };

function getKey() {
  return 'bao';
}


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        enable: false
      },
    },
    mysql: {
      client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'muen'
      }
    }
  };

  config.jwt = {
    secret: getKey()
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = getKey();

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
