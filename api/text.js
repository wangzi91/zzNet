const Router = require('koa-router')
const sql = require('./mysql')

const router = new Router()
router
  .get('/index/userList', async (ctx, next) => {
    let sqlstr = 'select * from user'
    const query = () => {
      return new Promise((res, rej) => {
        sql.query(sqlstr, (err, data) => {
          if (err) {
            res({
              message: err.message
            })
          }
          res(data)
        })
      })
    }
    let result = await query()
    ctx.body = result
  })
  .post('/api/users', async (ctx, next) => {
    ctx.body = 'hello zzNet user'
  })
module.exports = router
