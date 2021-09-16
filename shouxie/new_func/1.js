function Person(name, age, sex = "女") {
    console.log(arguments)
    this.name = name;
    this.age = age;
    this.sex = sex;
}
let xyj = new Person('xyj', 22, '男');
let xtk = new Person('xtk', 22);
console.log(xyj.name, xyj.age, xyj.sex);
console.log(xtk.name, xtk.age, xtk.sex)