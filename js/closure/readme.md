1.  第一行,在全局作用域下文中声明了一个新变量,赋值为 3。
    执行栈
2.  addTwo 在全局作用下的变量
    括号内的内容分配给 adadaTwo
    代码存储空间
3.  在全局作用域声明了一个 b undefined
4.  在调用 addTwo 函数 在全局作用域之中查找 addTwo 变量
    a 也在全局 值为 3 传给 addTwo 准备执行
5.  执行上下文切换，创建了一个新的本地执行上下文
    入栈，
6.  x ret 开始的值为 undefined
    x=3
7.  在当前 addTwo 执行上下文中找到 ret
    执行栈弹出 addTwo 上下文，销毁其作用域中变量，垃圾回收
8.  打印 b

2.js

- 执行上下文 执行栈 作用域
  1-8 行在全局作用域里面定义了新的变量,并赋值了函数定义
  9 全局 increment 值为 createCounter()
  创建新的本地执行上下文,并进行入栈
  2 创建了 counter 赋值为 0
  3-6 创建本地执行上下文 myFunction
  7 返回 myFunction 的内容
  counter 和 myFunction 都应该垃圾回收
  执行栈的弹出;回到全局
  10

  Lexical scope (词法作用域) 沿着作用域链去查找
  一个函数可以访问在他的调用上下文中定义的变量

  - 闭包也叫背包  
  let func = (function(){
      return function(){

      }
  })
  无论何时声明新函数并将其赋值给变量
  函数变量里不止存储函数定义,还有闭包
  背包一样,函数创建时背包中的所有变量
