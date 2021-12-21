const fs = require('fs')

fs.readFile('nginx.log',(error,data) => {
  // 错误对象 node 是error firsy 没有cluster模块前，在Java面前就是垃圾
  // 1. 报错
  // 2. 得到结果
  if (error) {
    console.error(error);
    return
  }
})