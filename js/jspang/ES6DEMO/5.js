//对象的赋值

let name = 'wave';
let skill = 'tt';
let obj = {
    name,
    skill
}
console.log(obj);

//key值的构建
let key = 'skill'

var ob1 = {
    [key]:'tt'
}

console.log(ob1);

//自定义对象方法

let ob2 = {
    add:(a,b) =>{
        return a+b;
    }
}
console.log(ob2.add(654,345));

//is() 两个对象进行比较(严格相等)

let n1 = { name:'wave'};
let n2 = { name:'wave'};
console.log(n1.name===n2.name);
console.log(Object.is(n1.name,n2.name));

//assign合并对象

let a = {a:'wave'};
let b = {b:'waave'};
let c = {c:'waaave'};
let d = Object.assign(a,b,c);
console.log(d);