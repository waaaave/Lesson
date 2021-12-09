const fs = require('fs')
const path = require('path')

// 从流程来到封装函数
// I/O
function findLargest(dir, cb) {
  // node 开发时，第一个参数都是error
  fs.readdir(dir, function (err, files) {
    if (err) return cb(err)
    var counter = files.length;
    var errored = false;
    // 有什么坑? 
    var stats = [];

    files.forEach(function (file, index) {
      // console.log(file, index);
      fs.stat(path.join(dir, file), function (err, stat) {
        // console.log(err, stat);
        if(errored) return;
        if(err){
          errored = true;
          return cb (err);
        }
        stats[index] = stat;
        // 什么时候文件读取完成
        if (--counter == 0){
          // console.log(stats,'66666666666666');
          var largest = stats
            .filter(function(stat){
              return stat.isFile()
            })
            .reduce(function(prev, next ){
              if(prev.size > next.size) return prev
              return next
            })
          // console.log(largest.size);
          cb(null, files[stats.indexOf(largest)])
        }
      })
    })

  })
}

// callback
findLargest('./src', function (err, file) {
  if(err) return console.error(err);
  console.log('largest file was:', file);
})