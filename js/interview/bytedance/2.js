// 手写instanceof
// instanceof 实例
//  血缘关系 原型关系

// r => new Preson
// r instanceof Person
// r instanceof Object
// 某个对象吃现在原型链条上我们都可以说对象是他的实例
// instanceof  是运算符，写不出来，所以写一个函数
// obj 实例 Fn 构造函数就是类 .prototype
// instanceof 右侧接受的必须是函数
const myInstanceof = (obj,Fn) => {
  if (typeof obj !== 'object') {
    return false
  }//return false
  const structure = obj.__proto__;//私有原型属性 指针
  if (structure == null) {
    return false
  }
  if (structure == Fn.prototype) {
    return true
  }else {
    return myInstanceof(structure,Fn)
  }
}

console.log(myInstanceof([], Array));
console.log(myInstanceof({}, Object));
console.log(myInstanceof(/1/, RegExp));
const Fn1 = function(){}
const a = new Fn1();
console.log(myInstanceof(a,Fn1));
console.log(myInstanceof(a,Object));
console.log(myInstanceof(1,Number));
console.log(myInstanceof(new String('1'),String));