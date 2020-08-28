const Router = require('koa-router')

const router = new Router()
router
  .get('/api2/', (ctx, next) => {
    ctx.body = 'hello zijin'
  })
  .post('/api/users', (ctx, next) => {
    ctx.body = 'hello zzNet user'
  })
module.exports = router
