// typeof instanceof 运算符，不能xxx.操作
// 'hello'.instanceof String 对于右边是有要求的 需要是一个类
// console.log('hello' instanceof String);
let a = new String('111');
console.log(a instanceof String);