@log1
class MyClass {
    constructor() {
        this.name = 'chou';
    }
    @log2
    getName() {
        console.log(this.name);
    }
    @log2 name = 'chou';
    @log2 static age = 10;
}
// es6的class 后面怎么会有prototype？ 
// es6的class只是语法糖，本质上还是 原型式继承
function log1(target) {
    target.prototype.logger = () => console.log(`我是${target.name}类`);
}
function log2(target, name, descriptor) {
    console.log('target:', target);
    console.log('name:', name);
    console.log('descriptor:', descriptor);


}

const test = new MyClass();
test.logger();
console.log(MyClass.age);