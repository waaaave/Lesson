function identity<T, U>(value:T,message:U):T {
  return value
}
// 类型可以在类型的调用时决定
identity<Boolean, String>(true, 'Smlinker')