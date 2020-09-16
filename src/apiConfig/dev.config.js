const baseUrl = require('./api')
module.exports = {
  '/index/': {
    target: baseUrl,
    pathRewrite: { '^/index/': 'api/index/' },
    changeOrigin: true
  }
}
