console.log('海贼王');
// setTimeout(() => { //异步了 event loop  有没有宏任务|微任务要去执行
//   //set timeout 宏任务  promise 微任务
//   console.log('火影忍者'); 
// }, 0); 
// process 进程 
process.nextTick(function(){ // nextTick 在下一个执行的进程中 属于 微任务 比setTimeout 高效
  console.log('火影忍者');
})
// console.log('火影忍者'); //怎么放到死神的后面？ 从那个角度分析？
console.log('死神');