const router = require('koa-router')()

router.prefix('/product')

//虚拟数据
const list = [
  {
    key: '1',
    id: 0,
    name: '熊猫',
    info: '123456',
    desc: '暂无',
    sort: '辣条',
    price: 188,
    stock: 400,
    status: 0

  }
]
router.get('/list', async(ctx) => {
  ctx.body = { code: 0, msg: '获取成功', success: true, data: list}

})

router.post('/update', async (ctx) => {
  const { id } = ctx.request.body
  list.map(v => {
    if(v.id === id) {
      v.status === 0? v.status = 1:  v.status = 0
    }
  })
  ctx.body = { code: 0, msg: '下架成功', success: true}
})

router.get('/listitem', async (ctx) => {
  const { id ,name } = ctx.query
  const msg = id? '查看数据成功' : '查看数据失败'
  ctx.body = { code: 0, msg, success: true, data: list }
})

router.post('/saveinfo', async (ctx) => {
  const { id, data} = ctx.request.body
  console.log(id, data)
  ctx.body = { code: 0, msg :'编辑成功', success: true, data: []}
})

router.post('/increase', async (ctx) => {
  const obj = ctx.request.body
  // list.push(obj)
  const key = list.length + 1
  list.push({key, ...obj})
  ctx.body = { code: 0, success: true, msg: ''}
})
const catelist = [
  {
    id: 1,
    name: '1234',
    key: '1'

  }
]
router.get('/category' , async (ctx) => {
  
  ctx.body = {code: 0, success: true, data: catelist}
})

router.post('/updatecate', async (ctx) => {
  const {id, info} = ctx.request.body
  catelist.map(v => {
    if(v.id === id) {
      v.info = info
    }
  })
  ctx.body = { code: 0, success: true, msg: '修改成功', data:[]}
})

router.post('/catesort', async(ctx) => {
  const { sort } = ctx.request.body
  console.log(sort)
  ctx.body = { code: 0, success: true, msg : '', data:[]}
})
module.exports = router