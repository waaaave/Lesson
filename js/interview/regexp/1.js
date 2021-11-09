// 百度一下 正则
function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
//   \w  简写 字符   a-zA-Z0-9_    \W 
//   () 分组  $1 ([-+.]\w+)
//   * 0 次或多次    {0, }
//   + 一次和一次以上 {1, }  
//   ？ 0次和1次      {0, 1}
//  {m, n}
// 
//   . 在  [] 不需要转译
// 

var str1 = 'ifat3.it@163.com'
var str2 = '754211506@163.com'
var str3 = 'ifat3.it@_a1163.com._cn'

console.log(isEmail(str3));