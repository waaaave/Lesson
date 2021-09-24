//io操作拿出来 commonjs
module.exports = (server) => {
    //socket服务 不会关闭通道,HTTP 基于 tcp/ip
    //ws:// http://
    const io = require('socket.io')(server);
    //服务器端手里的所有链接
    io.on('connection', socket => {
        socket.on('online', username => {
            console.log(`${username}上线了`, socket.id);
        });
    })

}