const fs = require('fs')
const path = require('path')
fs.stat(path.join('./src','menu'), function(err, stat){
  console.log(stat.isFile());
})