var isPalindrome = function(s) {
  var isgood
  var letter = s.replace(/[^a-zA-Z0-9]*/g,"").toLowerCase()
  for (let i = 0; i <= ([...letter].length)/2; i++) {
    if ([...letter][i] == [...letter][[...letter].length-1-i]) {
      isgood = true
    }else{
      isgood = false
      break
    }
  }
  return isgood
};

console.log(isPalindrome("0P"));