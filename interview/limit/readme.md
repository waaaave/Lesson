# promise 如何限流

  12个promise任务每次执行3个
  - 如果我们要选择一个数据结构解决这个问题，用队列FIFO 
    1. promise 任务当前再执行的promise（花时间）入队<3立即执行
    2. count<3 