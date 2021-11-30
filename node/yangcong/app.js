const Koa = require('koa')
const app = new Koa();
const axios = require('axios')
const instance = axios.create({})

app.use(async (ctx,next) => {
  const start = new Date(); // 计时开始
  await next();
  const delta = new Date() - start;
  console.log(`请求耗时${delta}ms`);
  console.log(ctx.state.baiduHTML);
})
app.use(async(ctx,next) => {
  ctx.state.baiduHTML = await instance.get('https://www.baidu.com');
})
// 挂载一个中间件 req->res
// app.use((ctx,next) => {
//   console.log('111');
//   next();
// })
// app.use(() => {
//   console.log('任何一个用户来，中间件函数都会得到执行');
// })
// app.get('/')  express

app.listen(8000,() => {
  console.log('server is starting');
})