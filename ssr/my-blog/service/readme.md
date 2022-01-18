- service /api
  MVC mysql + koa
- client SSR 呈现方式

- admin 后台
  SPA + antd 

- service 
  不靠他做传统的SSR服务 提供api
  MVC就是传统的SSR服务
    M Model DB DRUD
    V View 模板 <%= %>     ==> ctx.body = {}JSON
    C Controller 业务逻辑层

  传统业务通过路由进入控制器
  然后去model层取数据
  然后controller进行业务操作显示view

  现在 controller 返回的是JSON文件

- client
  不用SPA #root 对搜索引擎不好 搜索引擎（百度）只能拿到index.html
  SSR可以拿到完整的html posts 重要数据， 分析用户的搜索和网页的相关性

  SEO SSR服务器端返回的HTML 可以被浏览器访问 直接显示 提速
  还可以同样提供给SEO爬虫，提升网站在这个关键词上的热度

- koa 中间件家族
  凡是使用app.use 挂载的都是中间件
  顺序123456
  1. koa-views 设置模板位置和模板引擎类型
  2. koa-static 静态服务器 /punlic
  3. koa-bodyparser 收集post表单内容请求体
  4. koa-router 路由中间件

- cross-env 跨系统 配置环境变量
  - 如何设计后端的心脏
    InitManager 核心面向对象后端管理架构
    愉快的搬砖
    InitManager.initCore 静态方法 组织业务流程
      1. routes 目录下的所有路由挂载到APP
      2. modules
      3. 其他中间件
    InitManager.loadRoutes
      require-directory npm 加载目录下所有文件

  静态方法或属性 组织代码的好处