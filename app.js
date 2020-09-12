const Koa = require('koa')

const app = new Koa
const bodyParser = require('koa-bodyparser')
const KoaStatic = require('koa-static')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const user = require('./routes/user')

// 加载子路由
router.use('/index', user.routes())
router.get('/', (ctx) => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream(__dirname + '/dist/index.html')
})

// 加载路由中间件
app.use(router.routes())

app.use(KoaStatic(__dirname + '/dist/'))

app.use(bodyParser())
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} ${ms}ms`)
})
// app.use(router.routes())
app.listen(3001)
