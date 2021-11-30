- node 计算出来一次请求所花的时间
  new Date()
  www.baidu.com req res
  new Date() - 

- koa 的优势是什么
  比express
    天生支持async await
    ctx(上下文)

- 中间件用来处理用户的请求
  1. check session -> login  302(临时跳转)
    /upload 未登录 -> radirect 302 code status
    已登录 -> next()

    upload file (有无文件 您称是否正确 大小是否合格) -> checkFile next()

    写入文件
    app.use(saveFile)
    next ctx.body = 'success'

    报错
    app.use(errorHandler)