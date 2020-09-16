
const ip = process.env.NODE_ENV === 'development' ? '127.0.0.1' : '119.45.218.149'
console.log('主机ip:', ip)
const baseUrl = `http://${ip}:3002`
module.exports = baseUrl

