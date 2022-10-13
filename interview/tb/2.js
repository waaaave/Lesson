var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length -1; i++) {
        if (nums[i] == nums[i+1]) {
            return true
        }
        
    }
};

console.log(containsDuplicate([1,3, 2,4]));