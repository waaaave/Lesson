var output = function (i){
  setTimeout(() => {
    console.log(new Date,i);
  }, 1000);
}

//传参
for (let i = 0; i < 5 ; i++) {
  output(i);
}

console.log(new Date,i);
