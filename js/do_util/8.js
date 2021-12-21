const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)
readFile('./2021-11-11.log',{encoding:'utf-8'})
  .then(txt => console.log(txt))
  .catch(error = console.error(error))