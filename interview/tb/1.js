// 用算法来考API, es6 的理解
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};