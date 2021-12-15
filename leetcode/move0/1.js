var moveZeroes = function(nums) {
  var n = nums.length
  
  var change1 = (nums) => {
      for(let i = n; i > 0; i--){
      if(nums[i] == 0 && i!=n-1){
          nums[i]= nums[i+1]
          nums[i+1] = 0
          change1(nums)
      }
      if(nums[n] == 0){
          n--
      }
      
  }
  }
  change1(nums)
  
};