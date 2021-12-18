var reverseString = function(s) {
  let max = s.length - 1
  for( let i = 0; i< Math.floor(max/2); i++){
      let temp = s[i]
      s[i] = s[max -i]
      s[max -i] = temp
  }
  return s
};

console.log(reverseString(['h', 'e', 'l','l','o']));