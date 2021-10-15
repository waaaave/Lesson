const express = require('express');
const app =express();
const path = require('path');
//给项目引入redis数据库 M V C
const Redis = require('ioredis');
const redis = new Redis({
    port:6379,
    host:'127.0.0.1'
})
// 内存数据库 redis 比MySQL快
// let count =0; /*->持久化存储里读取 mysql不能用 开销太大*/
// 引入模板 JSX
// ejs
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.get('/',async(req,res) =>{
    // res.send('hello');
    //用户来的 时候来到了内存之中去到文件里拿到index.html
    //首先引入fs模块 fs.readFile  I/O 异步？ node 异步无阻塞
    //文件支持流操作
    let count = Number(await redis.get('count') || 0);
    count++;
    await redis.set('count',count);
    res.render('index',{count:count});
    // fs.createReadStream('./index.html').pipe(res);
})
app.listen(1234);