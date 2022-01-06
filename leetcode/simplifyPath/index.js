var simplifyPath = function(path) {
  var arr = path.split('/')
  for (let index =0; index <arr.length; index++ ) {
    if (arr[index] == '..') {
      arr.splice(index, 1)
      if (arr[index -1]) {
        arr.splice(index - 1, 1)
        index = index -2
      }else{
        index --
      }
    }
    if (arr[index] == '.' || arr[index] == '') {
      arr.splice(index,1 )
      index--
    }
  }
  if ( arr.length == 0 ) {
    return '/'
  }else{
    arr.unshift('')
  return arr.join('/')
  }
};

console.log(simplifyPath("/../"))