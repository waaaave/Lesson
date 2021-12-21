// node 如何解决异步问题 ? node 14+ 兼容
const fs = require('fs/promises')
fs.readFile('./2021-11-11.log')
  .then(txt => console.log(txt.toString()))
  .catch(error => console.error(error))