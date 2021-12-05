const express = require('express')

const app = express()

app.get('/', (req,res) => {
    // 设置响应
    res.send('hello express')
})

app.listen(8000,() => {
  console.log('server starting')
})