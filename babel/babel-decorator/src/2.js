// class Animal {//基类
//     constructor(language) {
//         this.species = '动物';
//         this.language = language;
//     }
//     speak() {
//         console.log('我能说' + this.language);
//     }
// }
//当一些类没有共同的祖先，但是又想拥有同样的方法
const speak = (target) => {
    const prototype = target.prototype;
    prototype.speak = function () {
        console.log('I can speak ', this.language);
    }
}
@speak
class Student {
    constructor(language) {
        this.language = language

    }
}
@speak
class Miao {
    constructor(language) {
        this.language = language
    }
}



const aliStudent = new Student('es7');
aliStudent.speak();
const miaoMiao = new Miao('miao');
miaoMiao.speak();