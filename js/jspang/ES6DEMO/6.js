// Symbol

let a = new String;
let b = new Number;
let c = new Boolean;
let d = new Array;
let e = new Object;

let f = Symbol();

console.log(typeof(f));
console.log(typeof(a));


let wave = Symbol('wave');
console.log(wave);
console.log(wave.toString());

let wa = Symbol();
let obj = {
    [wa]:'waave'
}
console.log(obj[wa]);
obj[wa]= 'waaaaave';
console.log(obj[wa]);

let ob1 = {
    name: 'wave',
    skill : 'tt',
    agr : 18
};
for (const item in ob1) {
   console.log(ob1[item]);
}

let ob2 = {
    name : 'waave',
    skill : 'ttt'
}
let age = Symbol();
ob2[age] = 28;
for (const item in ob2) {
    console.log(ob2[item]);
 }
 console.log(ob2[age]);