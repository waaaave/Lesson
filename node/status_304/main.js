const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
  // 同步 阻塞
  const stat = fs.statSync('./a.txt')
  // console.log(stat);
  // if (req.headers) {

  // }else{
  // 在响应内容的同时还写入响应头，告诉用户文件最后修改时间是什么时候
  if (req.headers['If-Modified-Since']) {
    if (req.headers['If-Modified-Since'] == stat.mtimeMs) {
      res.statusCode = 304
      res.end()
    }else{
      res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
      res.end('修改了')
    }
  } else {
    res.setHeader('Last-Modified', stat.mtimeMs)
    res.end('hello')
  }

  // }
  // 怎么让第一次请求得到文件的最后一次修改时间
  // 异步
  // fs.stat('./a.txt', (err, stat) => {

  // })
})

server.listen(3333)