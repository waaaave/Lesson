- create-next-app  SSR Server Side Rendering
  create-react-app SPA 
  框架
  1. /pages目录下添加任何东西 自动启用路由

- SPA 缺点？
  1. 流程是从#root
    webpack index.html 模板
  2. 生成bundle.js开始执行 APP挂载
    FunctionComponent -> 虚拟DOM -> 真实DOM -> 显示
  3. 白屏： 
    首次渲染组件和数据请求组成
  4. 把App等组件的react编译放到服务器端可不可以
    react 可以在服务器端运行， 服务器速度 > n 倍 的浏览器

    服务器端就完成编译， 随着index.html传递给客户端直接显示就可以了 
  5. 白屏时间
    SPA 资源请求时间 + react 编译运行时间(浏览器)
    SSR 服务器端react编译时间（ssr） + 资源请求时间
    前端MVVM
    传统的服务器端MVC
    SPA/post 不需要服务器端路由 react- router慢
    SSR /post 由koa-router next.js 服务器端运行 react component
    在服务器端是字符串文本， 发送到浏览器后直接显示就好了 

- SPA 优点
  1. 前端路由 不需要每次切换路由都去服务器（server side）端 
    解决白屏问题，但是不够彻底

- next.js 框架 约定大于一切
  1. 路由机制
  2. public 静态服务器
  3. image 自带延迟加载

  