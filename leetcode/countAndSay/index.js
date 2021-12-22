var countAndSay = function(n) {
  let str = '1'
  for(let i = 2; i <= n ; ++i){
    const sum = []
    let start = 0
    let end = 0
    while(end<str){
      while(end<str && str[end] == str[start]){
        end++
      }
      sum.push(''+(end-start) + str[start] )
      start = end
    }
    str = sum.join('')
  }
  return str
};

console.log(countAndSay(2))