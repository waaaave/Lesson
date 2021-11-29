let obj = {
  name : '鸭哥'
}
// 副作用 --> 影响到了外部变量
function loveTender (){
  obj.name = '杨执信'
  return 1;
}