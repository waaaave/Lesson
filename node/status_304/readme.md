# 304 Not Modify
- express 第一个职责是启动http服务
- 其他的事情交给中间件
- 来到路由中间件之后交给MVC模式
  - 传统的后端路由 MVC    动态的
  - 有很多静态文件时，交给静态服务器
    app.use(express.static('public'))
  - img 加上一个网络请求进程

- 为什么之前在直接访问 /images/black.jpg 一直都是200
  - 在 html中多次刷新就是304
   html -> image 浏览器缓存机制
   200 -> 304
   先用缓存200 但是改变了怎么办？
   还是要服务器去请求一下
   如果文件发生了改变 返回200 + image
   如果文件没有变  -> 304

- js 单线程 -> 异步无阻塞 -> I/O操作 -> 冯诺依曼

- 第一次访问资源时，通过res对象 (res.setHeader('Last-Modified', stat.mtimeMs)) 正常返回资源
- 下次访问时，响应体写入的 req会带上if-modified-since 值是一样的
- if-modified-since 的值和fs再次执行 mtimeMs比较