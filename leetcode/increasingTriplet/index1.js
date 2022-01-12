var increasingTriplet = function(nums) {
  const n = nums.length
  
  let have = false
  if(n<3) return false
  for(let i =0; i< n; i++){
      let count = 0
      var nextNum = i
      for(let j= nextNum; j<=n; j++){
          if(count == 2){
              have = true
              break
          }
          if(nums[nextNum]<nums[j]){
              count ++
              nextNum = j
          }else if( j == n-1){
              count= 0
            nextNum = i
          }
      }
  }

  return have
};

console.log(increasingTriplet([20,100,10,12,5,13]));