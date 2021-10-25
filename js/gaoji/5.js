const gender = Symbol('gender');

const obj = {
  name:'朱俊德',
  age:17,
  [gender]:'男'
}
// console.log(obj.name);
// console.log(obj[gender]);
//不可枚举
// console.log(Object.keys(obj));
// console.log(JSON.stringify(obj));
// console.log(Object.getOwnPropertySymbols(obj));
//反射类型 语言的高级特性 Reflect
console.log(Reflect.ownKeys(obj));