for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(new Date,i);
  }, 1000,1);  
}
console.log(new Date,i);

// 亮点
  // 1. let
  // 2.立即执行 IIFE Immeditely Invoked Function Expression 函数表达式
  // 3. settimeout 第三个参数