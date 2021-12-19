var myAtoi = function(s) {
  var num = parseInt(s)
  if(!num){
      num = 0
  }
  if(num < -Math.pow(2,31))(
      num = -Math.pow(2,31)
  )
  if(num > Math.pow(2,31) -1)(
      num = Math.pow(2,31) -1
  )
  return num
};