const router = require('koa-router')()
const { md5 , createuserid } = require('./util')
const { createUser, findOne, findAllByname,  updateByuserid} =  require('../model/db/user')

router.prefix('/user')


router.post('/register', async (ctx) => {
  const {name, pwd, type} = ctx.request.body
  const result = await findAllByname(name)
  if(result.length === 0) {
    await createUser({name, pwd: md5(pwd), type, user_id: createuserid(name, pwd)})
    ctx.cookies.set('userid', createuserid(name,pwd), {maxAge: 720000})
    return ctx.body = { code: 0, msg: '注册成功'}
  }
  return ctx.body = { code: 1, msg: '您的用户名重复'}

})

router.post('/login', async (ctx) => {
  const { name, pwd } = ctx.request.body
  const result = await findOne({ name, pwd: md5(pwd)})
  if(!result) {
    return ctx.body = { code: 1, msg: '该用户不存在', success: false}
  }
  ctx.cookies.set('userid', result.user_id, {maxAge: 7200000, httpOnly: false})
  const { user_id, type, avatar} = result
  return ctx.body = { code : 0, msg: '登陆成功', success: true, data: {user_id, type, avatar}}
})

router.post('/update',async (ctx) => {
  const user_id = ctx.cookies.get('userid')
  if(user_id){
    const {company, avatar, title, money, desc} = ctx.request.body
    await updateByuserid(user_id, company, avatar, title, money, desc)
    return ctx.body = { code: 0, msg: '更新成功', success: true}
  }
  return ctx.body = { code: 1, msg: '更新失败', success: false} 
})

module.exports = router
