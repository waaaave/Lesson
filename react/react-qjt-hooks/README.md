# react全家桶 纯前端项目架构套路
    1. react-router SPA
        MPA (multipal)
        路由(url到函数的映射)
        前端路由 Link history.pushState '/' ->'/user/xxx'
        不会去到服务器
        1. route switch ->page component 显示html

        后端路由 url HTTP 请求 定位资源 Request  Response 不返回HTML

        2. js 本地? index.js -> app.js ->page.js
        提供接口 在 useEffect 生命周期的时候 axiox xhr 请求JSON