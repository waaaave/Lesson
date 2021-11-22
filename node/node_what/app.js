const http = require('http');
const url = require('url')
// web伺服
// 要给用户分配资源
// 用户req req.url
// 事件

http
  .createServer((req,res) => {
    // fe -> fe
    // backend -> backend
    // console.log(url.parse(req.url).pathname);
    const { pathname } = url.parse(req.url);
    console.log(pathname);
    let str = 'hello'
    if(pathname == '/fe'){
      str +=' fe'
    }else if (pathname == '/backend'){
      str +=' backend'
    }
    res.end(str);
  })
  .listen(3100, () => {
  console.log('app start');
})