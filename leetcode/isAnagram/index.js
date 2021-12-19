// const _ = require('lodash')
var isAnagram = function (s, t) {
  var same = false
  const index1 = { x: 1, a: 2, d: 2, y:1 }
  const index2 = { x: 1, b: 2, c: 2, y:1 }
  console.log(index1, index2);
  if(JSON.stringify(s).length !=JSON.stringify(t).length){
      return false
  }
  for (var key1 in index1) {
    for(var key2 in index2){
      if (key1 == key2) {
        if (index1[key1] == index2[key2]) {
          same = true
          break
        }else{
          return false
        }
      }else{
        same = false
        continue
      }
  }
  }
  return same

};
// var isAnagram = function (s, t) {
//   var same = false
//   const index1 = _.countBy(s);
//   const index2 = _.countBy(t);
//   console.log(index1, index2);
//   if(JSON.stringify(s).length !=JSON.stringify(t).length){
//       return same
//   }
//   for (var key1 in index1) {
//     for(var key2 in index2){
//       if (key1 == key2) {
//         if (index1[key1] == index2[key2]) {
//           same = true
//         }else{
//           same = false
//         }
//       }else{
//         break
//       }
//   }
//   }
//   return same

// };
console.log(isAnagram("anagtam","nbgbram"));