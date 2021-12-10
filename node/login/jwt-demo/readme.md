- jwt 登录处理的一种方式
  1. status code 
    10~ 正在处理之中 
    101 Switch Protocol 
    http -> https

    20~ 成功

    30~ 重定向

    40~ 用户错误
      401 要求被认证
      403 forbidden 禁止请求

    50~ 服务器错误

- @babel/register 
  少去了webpack / @babel/cli 等工程的打扰，可以即刻启用es6风格编程
  @babel/register 将代码注册到babel转义 实时转义

- 配置路由
    import Router from 'koa-router'
    const router = Router();
      .get/.post 添加路由
    app
      .use(router.routers())
      .use(router.allowedMethods())

      {"code":200,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiYWRtaW4iLCJwd2QiOiIxMjM0NTYiLCJ1c2VySW5mbyI6eyJhZ2UiOjIwLCJzZXgiOiLnlLcifX0sImlhdCI6MTYzOTEyNTE4OSwiZXhwIjoxNjM5MTI1MjQ5fQ.k0tLDAcBhPoHTIctFvKn_0nBB-NCbYbkZXtSbDWEK2M"}