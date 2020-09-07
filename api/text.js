const Router = require('koa-router')
const query = require('./mysqlQuery')
const router = new Router()
router
  .get('/index/userList', async (ctx, next) => {
    let sqlstr = 'select * from user;'
    const result = await query(sqlstr)
    ctx.body = result
  })
  .post('/api/users', async (ctx, next) => {
    ctx.body = 'hello zzNet user'
  })
  .post('/index/deleteUser', async (ctx, next) => {
    const {id} = ctx.request.body
    let sqlstr = `delete from user where id = ${id};`
    const result = await query(sqlstr)
    ctx.body = result
  })
  .post('/index/editUser', async (ctx, next) => {
    const {id, name, age, content} = ctx.request.body
    let sqlstr = `update user set name="${name}", age=${age}, content="${content}" where id=${id}`
    const result = await query(sqlstr)
    ctx.body = result
  })
  .post('/index/addUser', async (ctx, next) => {
    const {name, age, content} = ctx.request.body
    let sqlstr = `INSERT INTO user (name, age, content) values ("${name}","${age}","${content}");`
    const result = await query(sqlstr)
    ctx.body = result
  })
module.exports = router
