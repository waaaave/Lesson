//日期在js中是对象类型 new Date() 返回的是
// const d1 = new Date()
// 单回执为 true/false
// NaN表示不是数字
const isDateValid = (arg) => !Number.isNaN(new Date(arg).valueOf());
// isDateValid("yyyy-mm-dd hh:mm:ss") // 可能会出错

// 验证输入的日期是否正确
console.log(isDateValid("December 17, 1995 03:24:00"))
// console.log(new Date("December 17, 1995 03:24:00").valueOf())
// console.log(+ new Date()); // 强制类型转换 变成 number
