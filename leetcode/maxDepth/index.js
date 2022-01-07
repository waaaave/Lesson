var maxDepth = function(s) {
  var count = [];
  var countL = 0;
  var countR = 0;
  var deepth = 1
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
  if (countL != countR) {
    return false
  }
  for (let i = 0 ; i<count.length; i++) {
    if (count[i] == 'L' && count[i+1] == 'L') {
      deepth ++
      
    }
    if (count[i] == 'R' && count[i+1] == 'R') {
      for (let j = i; j < count.length; j++) {
        
        
      }
      deepth --
      
    }
  }
  return deepth
  // console.log(count);
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));