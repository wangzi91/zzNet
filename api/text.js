const Router = require('koa-router')
const router = new Router()
router
  .get('/api/', (ctx, next) => {
    ctx.body = 'hello zzNet'
  })
  .post('/api/users', (ctx, next) => {
    ctx.body = 'hello zzNet user'
  })
module.exports = router
