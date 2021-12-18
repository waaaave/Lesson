var reverse = function(x) {
  if(x>Math.pow(2,31) || x<(-Math.pow(2,31))){
      x=0
  }else{
       if(x<0){
       x = -x
       let s = x.toString().split('')
   let max = s.length - 1
 for( let i = 0; i< Math.floor((max+1)/2); i++){
     let temp = s[i]
     s[i] = s[max -i]
     s[max -i] = temp
 }
 x = s.join('')
 x= -x
   }else{
       let s = x.toString().split('')
   let max = s.length - 1
 for( let i = 0; i< Math.floor((max+1)/2); i++){
     let temp = s[i]
     s[i] = s[max -i]
     s[max -i] = temp
 }
 x = s.join('')
   }
  }
 return x

};

console.log(reverse(123));