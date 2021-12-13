- node 的web功能是有一堆中间件构成
  1. app.use 就可以启动它
    1,2,3,4,5,6 洋葱模型
    中间件一定是函数
    koa-compose 合并了多个路由函数成一个函数

  2. 当进入到一个路由中间价的时候，一定考MVC
    app -> router(中间件) -> controller -> model -> controller -> view -> ctx.body