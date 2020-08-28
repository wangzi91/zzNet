const Koa = require('koa')
const app = new Koa
const router = require('./api/text')
const KoaStatic = require('koa-static')

app.use(KoaStatic(__dirname + '/dist/'))
router.get('/', (ctx) => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream(__dirname + '/dist/index.html')
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} ${ms}ms`)
})
app.use(router.routes())
app.listen(3001)
