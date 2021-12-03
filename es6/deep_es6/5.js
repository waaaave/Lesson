// [a,b] = [b,a] 两数交换
// 解构， 给默认值
// 按顺序解构
// 只有在undefined再会启用初值
let [a, b = 1] = ['鸭哥', null]
console.log(a,b);