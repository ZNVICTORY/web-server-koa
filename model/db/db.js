const config = require('./config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.dbname, config.uname, config.upwd, {
  dialect: config.dialect,
  host: config.host,
  port: config.port,
  pool: config.pool
})
sequelize.sync()
module.exports = sequelize
