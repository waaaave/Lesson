let obj1 = {
  name: '阿里浪',
  arr:[1, [2, 3], 4]
}
let obj2 = obj1
obj2.name = '字节浪'
// js内存优化的需要 所以如果是复杂数据类型，默认是应用是赋值
// obj1 也会改变 要解决只要用浅拷贝
// 浅拷贝 遍历源对象 拷贝第一层

function shallowClone(source) {
  // 原型
  var target = {};
  for(var i in source) {
      if (source.hasOwnProperty(i)) {
          target[i] = source[i];
      }
  }
  return target;
}

let obj3 = shallowClone(obj1)
obj3.name = 'wei浪'

console.log(obj1, obj3);