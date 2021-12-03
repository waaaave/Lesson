//  Map 对象 和 普通对象的区别

const obj = {a:1};
const o = {b:2}
obj[o] = 3

console.log(obj[o]);
// console.log(obj.toString());
console.log(Object.keys(obj));