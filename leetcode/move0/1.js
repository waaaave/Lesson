var moveZeroes = function(nums) {
    let j = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != 0){
            nums[j] = nums[i];
            j++
        }
    }
    for(let i = j; i<nums.lenth; i++){
        nums[i] = 0
    }
};

moveZeroes([0,1,0,3,12])