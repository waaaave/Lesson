// 打家劫舍
    // 终局思维 这家偷不偷
        //dp[i] // 最多的钱
   // dp[i-2] + nums[i] ？ dp[i-1] 

   var rob = function(nums){
    let length = nums.length
    if (length == 1) {
        return nums[0]
    }
    let dp = [] // 最优子结构集合
    dp[0] = nums[0] // 初始值
    dp[1] = Math.max(nums[0], nums[1]) // 初始值
    for (let i = 2; i < length; i++){
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    return dp[length -1]
   }

console.log(rob([2, 1, 1, 2, 1, 2, 1, 2 ]));