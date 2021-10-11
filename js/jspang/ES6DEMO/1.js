//二进制声明 Binary

let binary =0b010101;
console.log(binary);

//八进制声明 Octal
let octal = 0o666
console.log(octal);

let a = 11/4;
console.log(Number.isFinite(a));
console.log(Number.isFinite('wave'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

//NaN
console.log(Number.isNaN(NaN));

//整数 .isInteger
let b = 213.4;
console.log(Number.isInteger(b)); //取值范围 2**53
console.log(Number.parseInt(b));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
