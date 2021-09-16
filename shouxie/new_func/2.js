/**
 * 
 */

function Person(name, age, sex = "女") {
    console.log(arguments)
    this.name = name;
    this.age = age;
    this.sex = sex;
}
//手动实现new
const objectFactory = function () {
    console.log(arguments, '++++++++')
    var obj = new Object();
    //构造一下
    return obj;
}
const obj = objectFactory(Person, 'xyj', 22, '男');
console.log(obj, '----------')