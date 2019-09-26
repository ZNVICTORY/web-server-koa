const sequelize = require('./db')
const Sequelize = require('sequelize')

const buried = sequelize.define('buried', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  create_time: {
    type: Sequelize.BIGINT
  },
  finish_time: {
    type: Sequelize.BIGINT
  },
  path: {
    type: Sequelize.STRING
  },
  method: {
    type: Sequelize.STRING
  },
  all_time :{
    type: Sequelize.STRING
  }

}) 

async function createTime (start, end, method, path, all)  {
  await buried.create({
    create_time:start,
    finish_time: end,
    path,
    method,
    all_time: all
  })
}

module.exports = createTime