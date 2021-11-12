// push 方法
// 数组的内置方法 在数组后面添加新的项
// 没有数组数据类型
// 是一个可以遍历的对象
// 下标为key的连续存储的对象
// let arr = [1,2,3]
// 把数组实例构造出来的函数是Array 原型对象是Array.prototype
// let arr1 = new Array(1,2,3);
let obj = new Array(1,2,3);
Array.prototype.push2 = function(...args){
  // this 由运行的方式决定
  // push2 以对象的方法来使用 this只想实例对象
  // console.log(this[0]);
  const length = this.length;

  let i = 0;
  while(i<args.length){
    this[length + i] = args[i]
    i++
  }
  return this
}
console.log(obj.push2(4,5,6));
