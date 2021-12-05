# Ajax
  - 异步的js 和 xml 
  - 最大优势->无刷新的获取数据

  - 优点： ↑  还有 允许用户事件来更新部分页面内容
  - 缺点： 没有浏览历史，不能回退
      存在跨域问题（同源）
      SEO不友好

# XML 
  - 可扩展标记语言
  - 被设计用来传输和存储数据
  - XML 没有预定义标签 全都时自定义标签用来表示数据
    但是现在被json取代了

# HTTP(hypertext tansport protocol) [超文本传输协议]
  协议(约定，规则)
  - 请求(请求报文)
    格式--
      请求行
        请求类型（GET POST）
        url路径
        HTTP协议版本
      请求头
        Host:
        Cookie:
        Content-type；
        User-Agent：
      空行
      请求体
        username = admin & password = 123456

  - 响应(响应报文)
    行 
      HTTP 
      code 
      状态字符串
    头
      Content-type；
      Content-type；
      Content-encoding；
    空行
    体
      <html>
        <head>
        </head>
        <body>
          ...
        </body>
      </html>
  