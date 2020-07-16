/**
 * response message generator
 * 
 * @param {Number} statusCode http status code
 * @param {String} msg response message
 * 
 * @return {Object} response message
 */
module.exports = (statusCode, msg) => ({
  statusCode,
  body: msg,
});
