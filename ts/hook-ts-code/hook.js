// 进程中第二个参数
// console.log(process.argv[2]);
// test.ts 运行起来要几步 1. .ts-tyescript->.js 2. 运行.js

const path = require('path')
const ts = require('typescript')
const fs = require('fs')

const filePath = process.argv[2] // test.ts
// require 关键字 node 的模块化 
require.extensions['.ts'] = function(module, filename){
  const fileFullPath = path.resolve(__dirname, filename)
  // console.log(fileFullPath);
  // 同步的 阻塞的
  const content = fs.readFileSync(fileFullPath, 'utf-8')
  // .ts -> .js
  const { outputText } = ts.transpileModule(content, {
    compilerOptions:{}
  })
  console.log(outputText);
  // console.log(module, filename);
  // 编译 lazyload router component
  module._compile(outputText, filename)
}

require(filePath)