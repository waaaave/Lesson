//内部可以访问，但是外部不能
let obj = (function(){
  //闭合空间，都是私有
  return function(){

  }

})()