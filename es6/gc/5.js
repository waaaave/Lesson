const privateData = new WeakMap();
// 什么叫做私有 不能在实例上直接访问 》》》 在对象（类）内部可以访问
class Person {
  constructor(name,age){
    // this.name = name;  public
    privateData.set(this,{name:name,age:age})
  }
  getName(){
    // 对name属性的访问被限制了
    return privateData.get(this).name
  }
  getAge(){
    return privateData.get(this).age
  }
}

const ao = new Person('敖国栋',19);

console.log(privateData.get(ao))
console.log(ao.getName());
console.log(ao.getAge());
