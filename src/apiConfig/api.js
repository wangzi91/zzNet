
const ip = process.env.NODE_ENV === 'development' ? '127.0.0.1:3002' : '119.45.218.149:3001'
console.log('主机ip:', ip)
const baseUrl = `http://${ip}`
module.exports = baseUrl

