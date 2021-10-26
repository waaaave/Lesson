const http = require('http')
const querystring = require('querystring')

let server = http.createServer((req, res) => {
  console.log(req.url);
  const url = req.url
  const query = querystring.parse(req.url.split('?')[1])
  // console.log(query);
  const {name , age , callback} = query //const callback = query.callback
  const data = {
    name,
    age
  }
  res.end(`${callback}('${JSON.stringify(data)}')`) // callback
})

server.listen(3000, () => {
  console.log('服务已启动');
})