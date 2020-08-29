const _ = require('lodash');

/**
 * body param checker
 * 
 * @param {Object} body request body
 * @param {[String]} names parameter names
 * 
 * @return {Boolean} is valid?
 */
module.exports = (body, names) => {
  // conv string => [string]
  if (!_.isArray(names)) {
    names = [names];
  }

  return _.every(names, (name) => !_.isEmpty(body[name]));
};
