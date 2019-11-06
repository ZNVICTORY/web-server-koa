const router = require('koa-router')()

const list = [
  {
    key: '0',
    order: '100001',
    name: '123',
    status: 0,
    all_price: 123,
    payWay: '在线支付',
    recipient: 'zhangsan',
    create_time: '2016/9/9 23:56:14',
  }
]
router.prefix('/order')
router.get('/list', async(ctx) => {
  ctx.body = {code: 0, success: true, data: list}
})
router.get('/item' , async (ctx) => {
  const id = ctx.query.id
  const listitem = list.filter(v => (v.order === id) )
  ctx.body = { code: 0, success: true, data: listitem}
})
router.get('/detail', async(ctx) => {
  const id = ctx.query.id
  const listitem = list.find(v => (v.order === id) )
  const product = [
    {key: '0',imgUrl: '', productInfo: '8888888', price: 12345, allNum: 12, allPrice: 21324354}
  ]
  ctx.body = { code: 0, success: true, data: product , info: listitem}
})


module.exports = router