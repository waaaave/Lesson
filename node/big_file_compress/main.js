// node.js 官方文档
import { unlink, unlinkSync } from 'fs/promises';

// unlink('index.html',(err) =>{
//   if(err) throw err;
//   console.log('success');
// })

// try {
//   unlinkSync('index.html');
//   console.log('success');
// } catch (e) {
//   console.log(e);
// }

(async() => {
  try {
    // 不是 promise
    await unlink('index.html');
    console.log('success');
  } catch (e) {
    console.log(e);
  }
})()