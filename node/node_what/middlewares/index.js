// 分层的基础 把app传进来
const routes  = require('../routes');

module.exports = (app) => {
  // 挂载一份中间件
  // 中间件就是函数
  app.use(routes())
}