// 延迟执行
// 进行时
function currying(func) {
  const args = []
  return function result(...rest) {
    if (rest.length === 0) {
      return func(...args)
    }
    args.push(...rest)
    return rest = ult
  }
}

// 要curry 干嘛？
// 不要那么猴急
const add = (...args) => args.reduce((a, b) => a + b)
const sum = currying(add)
sum(1)(2)(3)(4)(5)
