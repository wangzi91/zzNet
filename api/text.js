const Router = require('koa-router')
const sql = require('./mysql')
sql.connect(function (err) {
  if (err) {
    console.error('mysql连接失败！ ' + err.stack)
    return
  }
  console.log('mysql连接成功！ ' + sql.threadId)
})
const router = new Router()
router
  .get('/index/userList', (ctx, next) => {
    ctx.body = 'hello zijin'
  })
  .post('/api/users', (ctx, next) => {
    ctx.body = 'hello zzNet user'
  })
module.exports = router
