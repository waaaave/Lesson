const { Map } = require('immutable')

const obj = {a:1};
var str = '123'
// oldState + action = newState
// 如果这个就是reducer immutable就没什么事了
console.log(str.replace(/1/,'一'),str); // 简单数据类型replace之后原变量不变化