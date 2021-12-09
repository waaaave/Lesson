- 目录下最大的文件是哪一个
  1. node
     文件也有头部信息 
     √ fs.stats 文件的详细信息
     X fs.readfile 读取文件

     fs.readdir 读取目录下所有信息
  
  2. 专业的异步
    首先使用回调函数解决异步问题
    一个异步问题中充斥着很多个fs.stats 异步问题
    开关变量 errored 过去式 减少很多性能开销 逻辑严谨
    计数器 全局的 --counter == 0

  3. api 
    filter 过滤器
    stats.isFile 是否是文件
    .reduce n个文件--> 一个文件
    indexOf() stats -> files[index]

  4. cb(null, file) callback