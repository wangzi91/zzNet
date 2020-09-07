const Router = require('koa-router')
const sql = require('./mysql')

function resArray (data) {
  return {
    code: 1,
    list: data
  }
}

function resAddObj (data) {
  return {
    code: 1
  }
}

function rejArray (err) {
  return {
    code: -1,
    message: err
  }
}

function rejAddObj (err) {
  return {
    code: -1,
    message: err
  }
}

const router = new Router()
router
  .get('/index/userList', async (ctx, next) => {
    let sqlstr = 'select * from user'
    const query = () => {
      return new Promise((res, rej) => {
        sql.query(sqlstr, (err, data) => {
          if (err) {
            res(rejArray(err.message))
          }
          res(resArray(data))
        })
      })
    }
    let result = await query()
    ctx.body = result
  })
  .post('/api/users', async (ctx, next) => {
    ctx.body = 'hello zzNet user'
  })
  .post('/index/deleteUser', async (ctx, next) => {
    const {id} = ctx.request.body
    let sqlstr = `delete from user where id = ${id};`
    const query = () => {
      return new Promise((resolve, reject) => {
        sql.query(sqlstr, (err, data) => {
          if (err) {
            resolve(rejAddObj(err.message))
          }
          resolve(resAddObj(data))
        })
      })
    }
    let result = await query()
    ctx.body = result
  })
  .post('/index/editUser', async (ctx, next) => {
    const {id, name, age, content} = ctx.request.body
    let sqlstr = `update user set name="${name}", age=${age}, content="${content}" where id=${id}`
    const query = () => {
      return new Promise((resolve, reject) => {
        sql.query(sqlstr, (err, data) => {
          if (err) {
            resolve(rejAddObj(err.message))
          }
          resolve(resAddObj(data))
        })
      })
    }
    let result = await query()
    ctx.body = result
  })
  .post('/index/addUser', async (ctx, next) => {
    const {name, age, content} = ctx.request.body
    let sqlstr = `INSERT INTO user (name, age, content) values ("${name}","${age}","${content}");`
    const query = () => {
      return new Promise((resolve, reject) => {
        sql.query(sqlstr, (err, data) => {
          if (err) {
            resolve(rejAddObj(err.message))
          }
          resolve(resAddObj(data))
        })
      })
    }
    let result = await query()
    ctx.body = result
  })
module.exports = router
