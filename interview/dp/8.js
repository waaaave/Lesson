// DPTable
function bag(weight, value, target) {
    const len = weight.length
    // 初始值
    // 如何迭代
    // 状态转移方程
    const dp = Array(target + 1).fill(0); // 初始化 加上dummy 节点
    dp[0] = 0;
    for (let i = weight[0]; i <= target; i++) { // 往背包中放东西的可能性
        // 放一件weight[0]
        dp[i] = value[0]
    }

    for (let i = 1; i < len; i++) {
        for(let j = target; j >= weight[i]; j--){
            dp[j] = Math.max(dp[j],dp[j-weight[i]] + value[i])
        }
    }

    return dp[target]

}

console.log(bag([2,2,6,5,4], [6,3,5,4,6],10));