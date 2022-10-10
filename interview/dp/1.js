// 斐波那契
// 什么样的结构适合递归  树！
// 绘制 树 状态转移方程就可以推出来
function fib(n){
    // 退出条件
    if (n == 1 || n == 2) {
        return 1
    }
    return fib(n-1) + fib(n-2)
}
// 性能问题
console.time()
console.log(fib(51));
console.timeEnd()