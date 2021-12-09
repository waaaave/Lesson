const fs = require('fs')
const path = require('path')
// Promise
// readdir promise
// map
// stat Promise.all([])

const readDir = function(dir){
  return new Promise(function(resolve, reject){
    fs.readdir(dir, function(err, files){
      if(err) reject(err)
      resolve(files)
    })
  })
}

function stat(path){
  return new Promise(function(resolve, reject){
    fs.stat(path, function(err,stat){
      if(err) reject(err)
      resolve(stat)
    })
  })
}

function findLargest(dir){
  return readDir(dir)
    .then(function(files){
      // console.log(files);
      let statPromises = files.map(file => stat(path.join(dir, file)))
      // 只要返回的是promise，就可以继续then able 这里可以拿到所有的状态数组
      // Promise.all 确保所有异步stat 全部解决
      // 并且返回的结果也是数组，结果按顺序放置
      return Promise.all(statPromises).then(function(stats){
        return {stats, files}
      })
    })
    .then(data => {
      let largest = data.stats
        .filter(function(stat) {return stat.isFile()})
        .reduce((prev,next) => {
          if(prev.size > next.size) return prev
          return next
        })
      return data.files[data.stats.indexOf(largest)]
    })
}

findLargest('./src')
  .then(function(filename){
    console.log('largest file was:', filename);

  })
  .catch(function(error){
    console.error(error);
  })