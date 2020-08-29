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
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'text',
  },
});
