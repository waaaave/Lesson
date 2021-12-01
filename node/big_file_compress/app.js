const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
// 有没有压缩的功底 发送的效率提高一下
const compress = require('koa-compress')

app.use(
  compress({
    filter: function (content_type) {
      // 响应体类型
      console.log(content_type); 
      return /text/i.test(content_type)
    },
    threshold: 1024,
    flush: require('zlib').Z_SYNC_FLUSH
  })
)

app.use((ctx, next) => {
  // 添加一个响应头
  ctx.type = 'text/html';

  ctx.body = fs.readFileSync('./index.html')
})

// app.use(async(ctx, next) => {
//   // ctx.body = 'hello world'
//   console.log(1);
//   next()
//   console.log(6);
// })
// app.use(async(ctx, next) => {
//   ctx.body = '2 le'
//   console.log(2);
//   next()
//   console.log(5);
// })
// app.use(async(ctx, next) => {
//   // ctx.body = 'hello world'
//   console.log(3);
//   next()
//   console.log(4);
// })

app.listen(8000);
