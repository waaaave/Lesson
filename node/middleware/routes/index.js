const KoaRouter = require('koa-router')
const koaCompose = require('koa-compose')
const hello = require('../controller/hello')
const router = new KoaRouter()

module.exports = () => {
  router.get('/fe', hello.fe)
  
  router.get('/backend', hello.backend)
  // compose 合并函数 可以把多个中间件函数 合并成一个中间件函数
  return koaCompose([router.routes(), router.allowedMethods()])

}