const cluster = require('cluster'); //多核能力
const http = require('http')
// http 服务器 nginx（天生多线程）代理 proxy
// 要体现一台服务器的多线程功能
const numCPUs = require('os').cpus().length

if (cluster.isMaster) { // 主进程
    console.log(`主进程${process.pid}正在运行`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // 每个cpu就像主进程一样进来工作了

    }
}else{
    // 工作进程 可以共享TcpHTTP 服务
    http.createServer((req,res) => {
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        res.end('我就是我\n');
    }).listen(8000)
    console.log(`工作进程${process.pid}已启动`);

}