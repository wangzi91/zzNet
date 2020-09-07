
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

const query = (sqlStr) => {
  return new Promise((res, rej) => {
    sql.query(sqlStr, (err, data) => {
      if (err) {
        res(rejArray(err.message))
      }
      res(resArray(data))
    })
  })
}
module.exports = query
