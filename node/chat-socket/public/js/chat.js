// console.log('chat');
const socket = io(); //socket.min.js WebSocket html5
//后端提供了socket服务 前端链接一下这个服务
socket.on('connect', () => {
    console.log('客户端连接成功');
    socket.emit('online', query.sender)
})
