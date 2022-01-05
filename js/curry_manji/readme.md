- 柯里化
  - 只传递给函数一部分参数来调用它，并让它返回一个函数去处理剩下的参数，当剩下的参数到位后，再执行

1. 闭包
  args 一直可以引用
  args.length >= fn.length

2. 递归 
  收集参数，简单事情重复做
  退出条件
  args.length >=fn.length
  ...args,..._args

3. 函数式编程
  currify 应用场景 编程模式