const sequelize = require('./db')
const Sequelize = require('sequelize')

const Chat = sequelize.define('chat', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  chat_id: {
    type: Sequelize.STRING,
    allowedNull: false
  },
  from: {
    type: Sequelize.STRING
  },
  to: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  read: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  create_time: {
    type: Sequelize.DATE
  }
})

async function createChat(chat_id, from, to, content) {
    await Chat.create({
      chat_id,
      from,
      to,
      content
    })
}

module.exports = {
  createChat
}