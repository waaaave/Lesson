const express = require('express');
const app = express();
const fs = require('fs');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'blog'
})

connection.connect();

// 表单页 提交了恶意代码
// 提交表单处理 
// 路由中间件
// 启用一个中间件, 最 去到 post /login 帮我们把表单内容准备好 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/form', function(req, res) {
  // 同步的 阻塞
  const form = fs.readFileSync('./form.html', {encoding: 'utf8'});
  res.send(form);
})
app.post('/login', function(req, res) {
  console.log(req.body);
  let{username,password} = req.body;
  //防注入
  // let sql = `SELECT * FROM user where username='${username}' and password='${password}' `;
  let sql = `SELECT * FROM user where username=${ connection.escape(username)} and password=${connection.escape(password)} `;
  console.log(sql,'-----------');
  connection.query(
    sql,
    function(err,results){
      console.log(err);
      res.send(results);
    }
  )
})

app.listen(8000);