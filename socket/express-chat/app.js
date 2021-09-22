// webserver
// 返回聊天室的首页
// socket 服务 on
// 实现加入房间一对一聊天
const express = require('express');
const { Socket } = require('socket.io');
const app = express();
// 内置模块 启动http服务，由express负责
const server = require('http').createServer(app);
//实时通信 ，socket协议在服务器端的封装
// 基于HTTP启动socket
const io = require('socket.io')(server);
io.on('connection', socket => {
    console.log('connect success!');
    socket.on('message', msg => {
        io.emit('message', {
            user: '系统',
            content: msg,
            creatAt: new Date().toLocaleDateString()
        })
    })
})
app.get('/', (req, res) => {
    console.log(__dirname + '/index.html');//魔法变量 绝对路径
    // res.send('hello world');
    res.sendFile(__dirname + '/index.html')
})
app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js');
})


server.listen(4000);