- 协议
  http / https

  - 缺点： http 不够安全
    无状态的(不会记住你)
  - 优点： 基于请求响应式（便捷高速）
  - cookie
    服务器想记住你,通过在服务器端种一个 cookie uid http -> 客户端浏览器
    cookie 文本
    login.js POST method / login.js url 请求头
    请求体 userName=niezong password=123456
    mysql user 登录成功 cookie=uid 存储文件 cookie 文件
    sessionId 会话
    session 服务器端 给用户开辟一个空间{
    nicknname:
    avatar:
    ……
    }

  请求完就断开
  请求 响应
  服务器在3000 状态下是伺服状态

主动推送不是 HTTP 协议
Websocket
