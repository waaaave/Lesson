var longestCommonPrefix = function(strs) {
  var min
  var a = strs[0]
  var end
  
  for (let i = 1; i < strs.length; i++) {
    for (var j = 0; j < strs[i].length && j<a.length; j++) {
      if (a[j] !== strs[i][j]) {
        end = j
        break
      }
      
    }
    console.log(j);
    a=a.substring(0,j)
    console.log(a);
    if (a.length==0) {
      return ''
    }
  }
  
return a
  

};
console.log(longestCommonPrefix(["ab","a"]));