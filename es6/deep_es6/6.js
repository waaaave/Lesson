let test = (...params) => {
  // 使用rest运算符更深层次的意义是什么
  // 普通函数的话没有argument
  console.log(params);
}
console.log(test(1,2,3,4,5));