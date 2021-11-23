// weakmap 的弱一点的map                    
// key 类型是对象， 数据结构的事情交给map
let myWm = new WeakMap();
myWm.set([],1)
myWm.set(new Date(),'李');
myWm.set(() =>{},1)

console.log(myWm.keys());