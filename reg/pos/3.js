let price = '1234567890';
// ?=p place 符合正则内容的位置
// let reg = /(?=\d{3}$)/;
reg = /(?!^)(?=(\d{3})+$)/g;
console.log(price.replace(reg, ','));