// a == 1 && a == 2 && a == 3

class A {
  constructor(value){
    this.value = value;
  }
  valueOf(){
    return 2
  }
  toString(){
    return '哈哈哈'
  }
}

const a = new A(1);

if (a == 1 && a == 2 && a == 3) {
  console.log('Hi Lang');
}