/**
 * json parse-able checker
 * 
 * @param {string} data raw data
 * 
 * @return {boolean} whether the data can convert to json or not
 */
module.exports = (data) => {
  try {
    JSON.parse(data);
    return true;
  } catch {
    return false;
  }
};
