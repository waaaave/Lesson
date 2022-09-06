function Person() {

}

const wave = new Person();

console.log(Object.prototype.toString.call(wave));
console.log(wave instanceof Person );
console.log(Object.prototype.toString.call(new Date()));
