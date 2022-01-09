var maxDepth = function(s) {
  var count = [];
  var countL = 0;
  var countR = 0;
  var deepth = 0
  var maxDeepth = 0
  var arr = s.split('')
  // console.log(arr);
  for (const key in arr) {
    if (arr[key] == '(') {
      count.push('L')
      countL++
      
    }
    if (arr[key] == ')') {
      count.push('R')
      countR++
      
    }
  }
  var long = count.length
  if (countL != countR) {
    return false
  }
  for (let i = 0 ; i<long; i++) {
    if (count[i] == 'L' ) {
      deepth ++
      maxDeepth = Math.max(deepth, maxDeepth)
      
    }
    if (count[i] == 'R' ) {
        for(let j = i ; j< long; j++){
            if(count[j] == "L"){
                deepth --
                break;
            }
        }
      
      
    }
  }
  return maxDeepth
  // console.log(count);
};
console.log(maxDepth("8*((1*(5+6))*(8/6))"));