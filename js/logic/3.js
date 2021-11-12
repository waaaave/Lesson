const animals = ['pigs', 'goats', 'sheeps'];
animals.push('cows'); // push 功能是向数组中添加一个新数据
// Array 如何判断是不是数组
// let a = 1;
// let b = {a:'1'}
// console.log(animals instanceof Array);
// console.log(Array.isArray(animals));
// console.log(Array.isArray(a));
// console.log(animals.toString());
console.log(Object.prototype.toString.call(animals) == '[object Array]')
