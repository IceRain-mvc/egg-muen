const crypto = require('crypto');

module.exports= {

  hmacUtils(params) {
    if (!params) {
      return '';
    }
    const hmac = crypto.createHmac('sha256', this.app.keys[0]);
    hmac.update(params);
    return hmac.digest('hex');
  }
};
