/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
  var arr = s.split('')
 var isLetter = /[a-zA-Z]/
 var l = 0;
 var r = arr.length-1
 while (l<=r) {
   if(!isLetter.test(arr[l]))l++
   if(!isLetter.test(arr[r]))r--
   if (l<r) {
      [arr[l],arr[r]] = [arr[r],arr[l]]
      l++
      r--
   }
 }
 return arr.join('')
};
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));
