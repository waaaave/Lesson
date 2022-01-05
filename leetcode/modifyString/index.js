var modifyString = function(s) {
  var arr = s.split('')
  for(let i = 0; i < arr.length; i++){
      if(arr[i] == '?'){
          if(arr[i-1] != 'a' && arr[i+1] != 'a'){
              arr[i] = 'a' 
              continue
          }
          if(arr[i-1] != 'b' && arr[i+1] != 'b'){
              arr[i] = 'b'
              continue
          }
          if(arr[i-1] != 'c' && arr[i+1] != 'c'){
              arr[i] = 'c' 
              continue
          }
      }
  }
  return arr.join('')
};