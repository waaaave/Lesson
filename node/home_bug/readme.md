# 一个可能让你打包回家的bug

- 有了服务器后为什么还要静态服务器
  - 缓存
  - 压缩
  - 服务器加速

- 如何快速返回HTML模板
  - 通过express.get('/') res.render('index') 建立路由 ejs views/index.ejs
  - 静态资源 静态服务器 webpack打理静态服务器