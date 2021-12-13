// 开启多进程
import cluster from 'cluster'
import http from 'http'
import { cpus } from 'os'

const numCPUs = cpus().length

// js 是单线程语言 -> node 就可以多线程
// 多个进程在多个CPU里面运行,代码都是一样的
// 如何启动cluster模块
console.log(cluster.isMaster);
  // 主进程
if (cluster.isMaster) {
  console.log(`Master ${process.pid}`);
  for (let i = 0; i < numCPUs; i++){
    // 子进程
    cluster.fork()  // 启动其他进程
  }
}else{
  http.createServer((req,res) => {
    res.writeHead(200) // 成功响应
    // res.end('hello world\n' + process.pid) // WebSocket
    res.end(`hello world\n ${process.pid}`)
  }).listen(8080)
  }

