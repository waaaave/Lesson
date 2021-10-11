// set 和weakset 区别
//set 是数据结构 可以去重
let setArr = new Set(['wave','tt','18']);

setArr.add('java')//添加

console.log(setArr);
console.log(setArr.has('wave'));
console.log(setArr.has('sadfasf'));
setArr.delete('wave');
console.log(setArr);

for (const item of setArr) {
    console.log(item);
}

setArr.forEach((value)=>console.log(value));

console.log(setArr.size);

setArr.clear()
console.log(setArr);

//可以用weakset放对象

let weakObj = new WeakSet();
let obj={a:'wave',b:'星客'};
weakObj.add(obj);
console.log(weakObj);