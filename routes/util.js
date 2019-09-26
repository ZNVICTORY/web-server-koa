const util = require('utility')

/**
 * 
 * @param {*} pwd 
 */
function md5(pwd) {
  const salt = '123456789,amdsfkdf;ck;#$%@#$%'
  return util.md5(pwd+salt)
}
/**
 * 
 * @param {*} name 
 * @param {*} pwd 
 */
function createuserid(name, pwd) {
  return user_id = util.md5(name+pwd)
}

module.exports = {
  md5,
  createuserid
}