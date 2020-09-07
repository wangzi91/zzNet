const Client = require('mysql')
const ip = '119.45.218.149'
console.log('mysqlIp:', ip)
const mySql = Client.createConnection({
  host: ip,
  user: 'root',
  password: '553572',
  database: 'likers'
})
mySql.connect(function (err) {
  if (err) {
    console.error('mysql连接失败！ ' + err.stack)
    return
  }
  console.log('mysql连接成功！ ' + mySql.threadId)
})
module.exports = mySql
