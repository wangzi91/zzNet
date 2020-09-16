const Koa = require('koa')

const app = new Koa
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router()
const user = require('./routes/user')

// 加载子路由
router.use('/index', user.routes())
// 加载路由中间件

app.use(bodyParser())
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} ${ms}ms`)
})
app.use(router.routes())

app.listen(3001)
