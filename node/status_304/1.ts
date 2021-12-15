// value 参数 类型限定
// 枚举类型
enum NoYes{
  No,
  Yes
}
function toChinese(value:NoYes){
  switch(value) {
    case NoYes.No:
      return '否'
    case NoYes.Yes:
      return '是'
  }
}

toChinese(NoYes.No)

const a1:{
  readonly name: string
} = {
  name:'ryf'
}

// a1.name = 'lxf'

// 微软 ts -> java
class Person {
  // # 是一个特殊标记 私有属性
  #name: string;
  constructor(name:string){
    this.#name = name
  }
  greet(){
    console.log(`Hello my name is ${this.#name}`);
    
  }
}

const tf = new Person('熊太锋')
// 实现了私有属性
// tf.#name
