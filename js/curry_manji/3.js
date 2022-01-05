// 参数 只给一部分  组合函数 函数式编程的范式之一 拆函数
// 返回一个函数
// fn(1)

const add = x => y => z => x + y +z
console.log(add(1)(2)(3));