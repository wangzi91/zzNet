const Client = require('mysql')
const mySql = Client.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '553572',
  database: 'likers'
})
module.exports = mySql
