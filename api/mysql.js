const Client = require('mysql')
const mySql = Client.createConnection({
  host: '127.0.0.1',
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
