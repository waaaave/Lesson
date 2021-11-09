 - +-*/++><
  1. 操作运算符
  2. 类型转换
  3. 规则

  - JS 有哪个项 自身不相等
    NaN 属于number但是表达的是不是数字
    NaN 语义概念相等
    Object.is(NaN，NaN)


  - 那两个项相等
    null = undefined

  == 会做到强制类型的转换
  === 不做类型转换
  Object.is() 不做类型转换

  - 除了 null 都有简单，复杂对象，函数__proto__ valueof 