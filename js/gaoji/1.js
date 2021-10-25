// 语法糖 箭头函数是函数的语法糖 
//   ↑   有没有都能实现
// function Person(){}

class Person {
  
 constructor(name){
    this.name = name; //公有属性
    
  }
  get name(){
    console.log('get 方法');
    return this.name;
  }
  set name(str){
    console.log('设置了name方法');
    this.name=str
  }
}

let coco = new Person('coco');
console.log(coco.name);