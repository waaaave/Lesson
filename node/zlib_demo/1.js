// 一边压缩，另一边收到之后开始解压
// 服务器和浏览器都支持Gzip
const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream')
const { createGzip } = require('zlib')

const gzip = createGzip();
const source = createReadStream('index.html');
const destination = createWriteStream('index.html.gz');

pipeline(source, destination, (err) => {
  if (err) {
    console.error(err);
  }
})