const coinChange = function (coins, amount) {
    // 用于保存每个目标总额对应的最小硬币个数
    const f = [] // 最优子结构 每一步都是最优
    f[0] = 0
    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity  // 无穷大 所有值都比他小
        for (let j = 0; j < coins.length; j++) {
            // 各种币种+1之前的最小值
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1
    }

    return f[amount]
}



console.log(coinChange([1, 2, 5], 11))