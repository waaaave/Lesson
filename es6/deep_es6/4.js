// Map 转为普通对象
// 程序能力 链式调用 它是一种设计模式 set 在完成添加的同时会返回map对象本身 return this;
const map = new Map()
  .set({a:1}, 2 )
  .set('foo',true)
  .set('bar',false)
  .set('baz',1);

// map Map() 对象 都是可以遍历的
  let obj = {};
  // es5 思维 传统写法
// map.forEach((value, key) =>{
//   // console.log(key, value);
//   obj[key] = value;
// })
// console.log(obj);

// [key, value] 叫做entry实体
console.log(Object.fromEntries(map));

// 把普通对象构成map对象
// entry(可遍历的实体) es6+
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);
console.log(entries);
console.log(Object.fromEntries(entries));
