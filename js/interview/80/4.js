for (var i = 0; i < 5; i++) {
  (function(i){
    setTimeout(() => {
      console.log(new Date,i);
    }, 1000)
  })(i);
}
//同步
setTimeout(() => {
  console.log(new Date,i);
}, 1000*i);
