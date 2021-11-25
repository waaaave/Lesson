function log(target, name, descriptor){
  console.log(target, name, descriptor);
}
// es7 的decorator
@log
class Car{
  run(){
    console.log('Car is running');
  }
}