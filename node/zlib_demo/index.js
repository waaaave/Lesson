var Koa = require('koa');
const app = new Koa();
// 中间件
const compress = require('koa-compress');
const fs = require('fs');

// app.use(compress({
//   filter: function(content_type){
//     return /text/i.test(content_type)
//   },
//   threshouls:1024,
//   br:false,
//   flush: require('zlib').Z_SYNC_FLUSH
// }))

app.use((ctx) => {
  ctx.type = 'text/html'; // 响应头
  ctx.body = fs.readFileSync('./index.html');
})

app.listen(2021)