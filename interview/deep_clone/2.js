let dog1 = { name: 'xp', a:1,b:2 ,1:'c', d:3 }

for (const key in dog1) {
    console.log(key,dog1[key]);
}

let dog2 = { dog1: '11', [Symbol()]: '2' }
const strong = new Map(); // hashMap
strong.set(dog1, 'xp good dog')
strong.set('a',1)
strong.set('b',2)
strong.set(1,'c')
strong.set('d',3)
// console.log(strong);

for (const [key, val] of strong) {
    console.log(key, val);
}