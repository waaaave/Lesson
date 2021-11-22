// koa生态
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const koaCompose = require('koa-compose')

// 分层
const hello = require('../controller/hello');
// require + module.exports -> commonJS
module.exports = () => {
  router.get('/fe',hello.fe)
  router.get('/backend',hello.backend)
  return koaCompose([router.routes(),router.allowedMethods()])
}

// 没有第5行的话用下面的也能实现，就是比较臃肿
// module.exports = () => {
//   router.get('/fe',(ctx) => {
    
//   })
//   router.get('/backend',(ctx) => {
    
//   })
// }