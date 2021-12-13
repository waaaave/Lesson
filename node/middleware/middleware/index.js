const routes = require('../routes')

module.exports = (app) => {
  // 挂载一个中间件
  // routes() 返回值得是函数
  app.use(routes())
}