let wave = '星客';
// let blog = wave+'常说每天都要开心啊';
let blog = `${wave}常说每天都要开心啊`
document.writeln(blog.includes('天'));
document.writeln(blog.endsWith('啊'));


let a = 1;
let b = 2;
let result = `${a+b}`;
document.writeln(result.repeat(10));