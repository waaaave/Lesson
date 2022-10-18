- 前后端分离
- 原因
    1. 前端 负责页面的展示 （css + React + HTML5）, 交互（事件系统）， 响应（用户体验）， 适配设备
    2. 后端 数据存储 接口提供 分布式 高并发  早期的传统MVC 切图仔
    3. Ajax 
        js可以主动请求数据
    4. MVVM
    5. 前端路由 单页应用 反应快

- 如何分离
    1. 前后端通过异步接口（AJAX/JSONP/CORS）来编程
    2. 各有各的开发流程（全家桶）构建工具（VITE WEBPACK) 测试集合
    3. 关注点分离
        后端MVC 数据接口 服务器 Linux 分布式
        前端 MVVM 渲染 浏览器端

- 开发流程
    1. 后端和前端先沟通需求， 指定接口文档
    2. 后端写接口
    3. 前端独立的通过 mockjs / fastmock + axios 独立完成产品开发
    4. 双方做完了， axios baseURL 切换 成后端的接口
    5. 联调

- HTTP 无状态
    1. 简单
    2. 每个请求是独立的， 包含了处理这个请求所需的完整的数据
    HTTP1.1 有 KEEP ALIVE 状态 是明文传输的 是无状态的 可以无牵挂的并发各种请求
    3. 原因是 HTTP协议 浏览静态文件
    4. 如何解决无状态的问题， 用户系统， 购物车
        1. cookie
            无状态， 每次都传输， 比较小
            不需要用户身份的请求
            不安全
        2. session
            会话对象， 内存中数据库
            cookie uid name age avatar 大小受限
        3. token

- Restful
    一切皆资源 网站通过url 向外暴露资源
    定义了获取或操作资源的方式， 要符合语义
    Method + url 
    GET + /posts/:id 123  读取某个文章
    POST + /goods/  新增文章
    PATCH + /posts/：id 修改某篇文章
    PUT /posts/：id   重新上传附件
    DELETE /post/: id  删除
    HEAD  只获取头信息
    OPTIONS 查看服务器性能
    TRACE  诊断服务器的请求
    CONNECT  代理服务器

- TS 考题
    interface type
    泛型