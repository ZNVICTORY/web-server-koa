const Sequelize = require('sequelize')
const sequelize = require('./db')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pwd: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING
  },
  avatar: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  money: {
    type: Sequelize.BIGINT
  },
  desc: {
    type: Sequelize.STRING
  }
},{ timestamps: false })


async function createUser({name, pwd, type, user_id}) {
  await User.create({
    name,
    pwd,
    type, 
    user_id
  })
}

async function findOne({name, pwd}) {
  return result =  await User.findOne({
    where: {
      name,
      pwd
    }
  })
}
async function findAllByname(name) {
  const result = await User.findAll({
    where: {
      name
    }
  })
  return result
}

async function findOneByuserid(userid) {
  const result = await User.findOne({
    where: { user_id: userid}
  })
  return result
}

async function updateByuserid (userid, desc, title, company, avatar, money) {
  const result = await User.update({
    desc,
    title,
    company,
    avatar,
    money
  },{
    where: {
      user_id: userid
    }
  })
}

module.exports = {
  createUser,
  findOne,
  findAllByname,
  findOneByuserid,
  updateByuserid
}