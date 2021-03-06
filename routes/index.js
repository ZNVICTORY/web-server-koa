const router = require('koa-router')()
const userRoute = require('./users')
const adminRoute = require('./admin/login')
const adminProduct = require('./admin/product')
const adminOrder = require('./admin/order')

router.prefix('/api/v1')
router.use(userRoute.routes(), userRoute.allowedMethods())

router.prefix('/api/v1/admin')
router.use(adminRoute.routes(), adminRoute.allowedMethods())
router.use(adminProduct.routes(), adminProduct.allowedMethods())
router.use(adminOrder.routes(), adminOrder.allowedMethods())

module.exports = router
