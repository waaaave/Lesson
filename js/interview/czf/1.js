class A {
  valueOf(){
    return 2
  }
  toString () {
    return '哈哈哈'
  }
}
let a = new A();
console.log(a == 2);
console.log(a === 2);

// Number String ()
// 1 new  Number() 包装类“1”