1.  引入Express
  const express = require('express')

2. 创建应用对象
  const app = express()

3. 创建路由规则
  req == 对请求报文的封装
  res == 对响应报文的封装
  app.get('/', (req,res) => {
    // 设置响应头， 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin','*')
    
  })

4. 监听端口 启动服务
  app.listen(8000,() => {
    console.log('serviver starting')
  })