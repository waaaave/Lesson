// 回调来做的 async await
// utill node 内置库
const { promisify } = require('util');
const { pipeline } = require('stream');
const { createGzip } = require('zlib');
const { createReadStream, createWriteStream } = require('fs');
// node 是一个异步无阻塞的
// node 将js 带到了后端
// 异步的好处？ 性能会更好
// php 在写入数据库的时候会block 阻塞线程
// js 把写入数据库当成了时间来处理(event)
// node pipeline 就是用callback的方式异步处理 但是容易形成回调地狱
const pipe = promisify(pipeline);
async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination)
}

do_gzip('index.html','index.html.gz')
  .catch((err) => {
    console.error(err);
  })