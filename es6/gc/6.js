// 递归的思想
let person = {
  name:'敖总',
  professoin:{
    name:'developer'
  }
}


Object.freeze(person);
person.name = '敖国栋';
person.professoin.name = '富婆杀手';

console.log(person);