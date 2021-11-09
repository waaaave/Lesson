var string = '123 1234 12345 123456'

//  .test  match  字符串
// 问题  贪婪  | 惰性

var reg = /\d{2,5}?/g;
console.log(string.match(reg));