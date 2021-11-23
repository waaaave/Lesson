// 代替js object  js终于有了根正苗红的HashMap
let zl = {
  name:"扬州林",
  go:"阿里"
}
const dogs = new Map();  // es6 提供的新数据结构
dogs.set('Snicker',3);
dogs.set('Sunny',2);
dogs.set('Hugo',10);

dogs.forEach((val,key) => {
  console.log(val,key);
})

console.log(Object.keys(zl));
console.log(Object.keys(dogs));
console.log(dogs.keys());