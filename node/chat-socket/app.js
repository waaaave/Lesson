const { constants } = require('buffer');
const express = require('express');
const { request } = require('http');
//express 第一个最火的企业级框架 koa
//阿里三件套 egg.js ，antd
const path = require('path');
const app = express();
const server = require('http').createServer(app);
require('./io.js')(server);
//img js css json 都叫静态资源,会统一的放在一个文件夹下

//use 使用一个中间件

// console.log(path.join(__dirname, './public'));
//每次用户来了使用这个中间件
//用户登陆了吗
//用户上传文件了吗
app.use(
    //静态服务器 express 自带的中间件 递归
    express.static(
        //路径拼接
        path.join(__dirname, './public')
    )
)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
// app.get('/public/js/chat.js', (req, res) => {
//     res.sendFile(__dirname + '/public/js/chat.js')
// })
// app.get('/public/css/common.css', (req, res) => {
//     res.sendFile(__dirname + '/public/css/common.css')
// })
// app.listen(3000, () => {
//     //webrtc webgl
//     console.log('应用在3000端口上伺服');
// })
server.listen(3000, () => console.log('server is listening on 3000'))