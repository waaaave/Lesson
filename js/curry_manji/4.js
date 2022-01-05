// ramda 是完全符合函数式编程思维的库
// 函数式编程不只是不写class， 不只是reducer这样的纯函数
// 柯里化也是

const R = require('ramda')

// curry 名词
// 功能函数 -> 柯里化一下 -> (x => y => z => x + y +z)
const addThreeNumbers = (x, y, z) => x + y + z

// 1. 手写curry函数
// 2. 第三方库 

const curriedAddThreeNumbers = R.curry(addThreeNumbers)

console.log(curriedAddThreeNumbers(2,3,4,5,6))