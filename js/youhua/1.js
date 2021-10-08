//记忆函数  用闭包
function summation(target) {
    let map = new Map();//key value 曾经计算过
    return function (target) {
        if (map.has(target)) {
            console.log('缓存了。。。');
            return map.get(target);
        }
        let sum = 0;
    for (var i = 0; i <= target; i++) {
      sum +=i;
        
    }
    map.set(target,sum)
    return sum;
    }
    
}
const summationWithoutMemo = summation();
console.log(summationWithoutMemo(100));
console.log(summationWithoutMemo(100));
console.log(summationWithoutMemo(100));
// console.log(summation(100));
// console.log(summation(100));