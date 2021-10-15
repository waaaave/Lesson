const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const todosRouter = require('./routes/todo');

//中间件
// body-parser
//跨域中间件
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
app.use(cors());
//路由中间件
app.use('/todo',todosRouter);

app.listen(4000,()=>{
    console.log('服务器启动了');
})