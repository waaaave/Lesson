# 当用户访问 /fe 时展示 hello fe ， /backend 展示 hello backend

- router 模块
- express 太重了
  原生模块
  一面面试官是要你的人

- node 的核心模块
  - http模块启动web服务就三局代码， 比其他后端语言的一大堆配置来说快很多
  - url 是web服务的基础构成 url 内置模块把协议，域名，路径，参数，查询字符串，端口 分析的明明白白
  - createServer 返回server实例 单例
    Listen方法 进入伺服状态
    当用户到来后（req），相当于一个事件发生， 放在createserver中的回调函数执行
    res响应用户请求并结束http过程


- 上面过程挺好的，为什么要koa?
  - 框架
    url parse 不友好 koa 直接解决了
  
  - 特点 开发效率比原生高

- 不能把所有代码写在一起，要分层
  MVC
  C controller MV不能直接通信 需要控制器层控制用户的访问并且做业务开发
  app.js 单点入口 文件不易过大
  路由分离到routs目录 就会触发controller
  做一些业务打理，比如对参数的校，以及对逻辑的整理
  V views 显示计算后的结果，并且以HTML模板的方式返回
  M models sql语句执行 数据表映射成为对象


  main.js 实例化app -> middleware 启动路由中间件 -> routers 实例化路由，只作路由相关 -> controller 返回操作