var firstUniqChar = function(s) {
  let single 
  let x = s.toString().split('')
  let length = x.length
  if (length == 1) {
    return 0
  }
  for(let i =0; i<length; i++ ){
   for(let j =0; j<length; j++ ){
      if(x[i] != x[j] ){
          single = i
      }else if (i != j ) {
        single = -1;
        break
      }
  }
  if (single != -1) {
    break
  }  
  }
  return single
};
console.log(firstUniqChar('loveleetcode'));