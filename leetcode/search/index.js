
var search = function(nums, target) {
  var Lb = 0
  var Rb = nums.length -1
  var index = -1
  for(let i = 0; i<nums.length/2; i++){
      if(nums[Lb] == target){
        index = Lb
        break
      }
      if(nums[Rb] == target){
        index = Rb
        break
      }
      Lb++
      Rb--
  }
  return index


};

console.log(search([-1,0,3,5,9,12],9));