const Koa = require('koa')
const middleware = require('./middleware')
const app = new Koa()
const PORT = 3003

// 职责分离
middleware(app)
// app.use((ctx,next) => {
//   ctx.body = '1'
//   console.log('1');
//   next()
// })

// app.use((ctx,next) => {
//   console.log('2');
// })


app.listen(PORT, () => {
  console.log(`app start at ${PORT}`);
})
