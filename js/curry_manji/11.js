let obj1 = {
  name: '阿里浪',
  arr:[1, [2, 3], 4]
}

// let obj2 = obj1

// 深拷贝 递归 JSON 但是函数之类的不能拷贝

// 深拷贝的代价 极其消耗内存
let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.arr[1][0] = 5

console.log(obj1, obj2);