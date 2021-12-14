// 负责一个复杂任务
self.addEventListener('message', function(e){
  console.log(e.data);
  self.postMessage('Master you said ' + e.data)
})