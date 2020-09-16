const Koa = require('koa')
const app = new Koa
const query = require('../api/mysqlQuery')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const router = new Router()
app.use(bodyParser())
router
  .get('/userList', async (ctx, next) => {
    let sqlstr = 'select * from user;'
    const result = await query(sqlstr)
    ctx.body = result
  })
  .post('/deleteUser', async (ctx, next) => {
    const {id} = ctx.request.body
    let sqlstr = `delete from user where id = ${id};`
    const result = await query(sqlstr)
    ctx.body = result
  })
  .post('/editUser', async (ctx, next) => {
    const {id, name, age, content} = ctx.request.body
    let sqlstr = `update user set name="${name}", age=${age}, content="${content}" where id=${id}`
    const result = await query(sqlstr)
    ctx.body = result
  })
  .post('/addUser', async (ctx, next) => {
    const {name, age, content} = ctx.request.body
    let sqlstr = `INSERT INTO user (name, age, content) values ("${name}","${age}","${content}");`
    const result = await query(sqlstr)
    ctx.body = result
  })
module.exports = router
