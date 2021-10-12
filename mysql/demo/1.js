var md5 = require('md5');
// var password = '123456';
var password = 'abcd123456';
let hashed_password = md5(password);
console.log(hashed_password,hashed_password.length);