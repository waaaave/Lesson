const express = require('express')

const app = new express()

app.get('/server',(req, res) => {
  // 设置响应头， 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  res.send('Hello Ajax')
})

app.post('/server',(req, res) => {
  // 设置响应头， 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应体
  res.send('Hello Ajax')
})

app.listen(1234,() => {
  console.log('server starting');
})