const router = require('koa-router')()
const {createuserid} =  require('../util')

router.prefix('/user')

router.post('/login', (ctx)=>{
   const { username, password} = ctx.request.body
   ctx.cookies.set('userId', createuserid(username, password),{httpOnly: false, maxAge:72000})
   ctx.body = { code : 0, success: true, msg: '登陆成功'}
})
router.get('/userlist' , async (ctx) => {
   const userlist = [
      {
        key: '0',
        id: 0,
        name: 'zhansan',
        email: '99@qq.com',
        phone: "1234567",
        time: "23:09"
      }
   ]
   ctx.body = { code: 0, success: true , data: userlist}
})


module.exports  = router