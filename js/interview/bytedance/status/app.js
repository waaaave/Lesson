var http = require('http');

// 301 是一个状态码，在请求体中 post
// 什么是请求行
// 计算机网络协议层 有7层 TCP/IP 在传输层 （request -> server ->response ）
// 首先建立通信需要的传输的通道 
//  发送请求头 cookie url get  请求体： post 表单 如果携带了file就比较大
// http是应用层 text/html image 主要和应用交互
// image 都是二进制编码
// TCP/IP 传输过程中分包传输 第一个包放请求头 最早到达服务器 做好准备
// 请求行中包含请求头 请求行： GET(http://www.baidu.com) 请求头： cookie  Location  ?a=    请求体

var server = http.createServer(function(req,res){
  // 301 在请求头（响应头）中
  // 服务器告诉用户这个地址失效了，自动跳转，于是就报301
  res.writeHead(302,{
    'Location': 'http://itbilu.com'
  }) 
  console.log(res._header);
  res.end();
})

server.listen(8888);