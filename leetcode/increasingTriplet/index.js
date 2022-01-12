var increasingTriplet = function (nums) {
  var next = false
  var first = Infinity
  var second = Infinity
  var begin = nums.indexOf(second)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < first) {
      first = nums[i];
    } else if (nums[i] < second && nums[i] != first) {
      second = nums[i];
    }
    if (nums[i] > second ) {
      next = true
    }
  }
  
  return next
};



console.log(increasingTriplet([4,5,2147483647,1,2]));
