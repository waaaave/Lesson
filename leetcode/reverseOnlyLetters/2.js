/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
  var isLetter = /[a-zA-Z]/
  var arr = s.split('')
  var letters = []
  for (const key in arr) {
    console.log(key);
    if (isLetter.test(arr[key]) ) {
      letters.push(arr[key])
      console.log(letters);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (isLetter.test(arr[i])) {
      arr[i] = letters.pop()
    }
    
  }

  return arr.join('')
  
};

console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));