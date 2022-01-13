var dominantIndex = function(nums) {
  var max = 0
  var index = -1
  for(let i in nums){
      max = Math.max(nums[i], max)
  }
  index = nums.indexOf(max)
  for(let i in nums){
      if(nums[i] == max || nums[i]*2<=max){
          continue;
      }
      if(nums[i]*2>max){
          index = -1
      }
  }
  return index
};

console.log(dominantIndex([1,2,3,4]));