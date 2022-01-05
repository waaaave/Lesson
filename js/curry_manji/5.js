// 手写 curry  参数
// 怎么计算参数数据收集到位
// 随便传几个参数
// fn.length == args.length

// 1. 参数慢慢来
// 2. 参数到齐就开席
// 3. 收集参数是递归
const curry = (fn, ...args) => 
  args.length >=fn.length
  ?fn(...args)
  : (..._args) => curry(fn, ...args, ..._args)

  const addThreeNumbers = (x, y, z) => x + y + z
  const curryAddThreeNumbers = curry(addThreeNumbers)
  console.log(curryAddThreeNumbers(1)(2)(3))