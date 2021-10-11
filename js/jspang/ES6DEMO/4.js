//对象的函数解构

let jason = {
    a:'wave',
    b :'xingke'
}

//数组的解构

let arr = ['1','2','3'];

fun = (a,b,c)=>{
    console.log(a,b,c);
}

fun(...arr)

//in 的用法

let obj = {
    a:'wave',
    b: '星客'
}
console.log('a' in obj);

//数组遍历
// for each

let ar1 = ['a','c','b'];
ar1.forEach((val,index) => console.log(index,val));
ar1.filter(x => console.log(x));
ar1.some( j => console.log(j));
console.log(arr.map(y =>'wave'));
console.log(ar1.toString());
console.log(ar1.join('|'));