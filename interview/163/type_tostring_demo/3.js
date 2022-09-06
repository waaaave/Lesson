// 隐式类型转换是强制类型转换的执行
console.log(0 + '1' === '01')
console.log([] + {} === 0)
console.log({} + [] == 0)
let a = ({} + 0 )
console.log(Number(undefined))
console.log(Number(null))