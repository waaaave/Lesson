- node 单线程
  1. 为什么之前没有阻塞的时候，感觉不出来
    主线程进入 idle 状态  很忙的时候就会阻塞
    单线程是有缺点的 如果有个用户的任务非常耗时 
    那么其他用户只能等 
  2. 能不能多线程
    Cluster 
    Master 负责调度 
  3. 不需要多线程，
    10s 同步阻塞任务，优化成
    异步event loop 事件回调 
    异步无阻塞 
  4. node 比 php优秀 
    js 本身是单线程， event loop 设计成异步

    Cluster 对线程(启动更多硬件资源CPU n) + 异步无阻塞  (每个CPU 同时处理50个任务)
    并发  n*50   阻塞 php  20n

- 前端也有多线程
  h5 Web Worker