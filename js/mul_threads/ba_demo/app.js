const cluster = require('cluster')
const os = require('os')
if(cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
} else {
    const express = require('express')
    const app = express()

    function doWork(duration) {
        const start = Date.now()
        // 停留十秒钟 
        // JS 单线程 
        // 如何阻塞JS线程  while true 
        // while(Date.now() - start < duration) {
            
        // }
    }
    // node 单线程 

    app.get('/', (req, res) => {
        // 阻塞10s
        // doWork(10000)
        res.send('I like node')
    })

    app.get('/fast', (req, res) => {
        res.send(`I like jonson ${process.pid}`)
    })

    app.listen(3000)
}
