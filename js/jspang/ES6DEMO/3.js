//函数扩展,箭头函数

function add (a,b=1){
    if (a==0){
        throw new Error('A is error');
    }
    return a+b;
}
console.log(add(2));
console.log(add.length);

var mul = (a,b=1)=> a*b;

console.log(mul(3,5));