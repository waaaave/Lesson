// WeakMap 对key的引用 
// !!! Weakmap对象是弱引用关系，当对象在其他地方回收后
// weakmap会自动解除和原对象的引用关系
// weakmap用于复杂应用里内存的管理，不用担心内存的不可回收
let key = new Array(5*1024*1024)
const map = new WeakMap();
map.set(key,1);
key = null; // 因为用了weakmap所以会立马回收