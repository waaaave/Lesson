const fs = require('fs')
const path = require('path')

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

async function findLargest(dir){
  var files = await readDir(dir)
  let statPromises = files.map(file => stat(path.join(dir, file)))
  let stats = await Promise.all(statPromises)

  let largest = stats
    .filter(function(stat) {return stat.isFile()})
    .reduce((prev,next) => {
      if(prev.size > next.size) return prev
      return next
    })
  return files[stats.indexOf(largest)]
}

findLargest('./src')
  .then(function(filename){
    console.log('largest file was:', filename);

  })
  .catch(function(err){
    console.error(err);
  })