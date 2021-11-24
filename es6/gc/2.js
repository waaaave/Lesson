let map = new Map();
let key = new Array(5*1024*1024); // 声明了一个let变量 有一个暂存区 没初始化的话不能调用 Mb级别的数据属于大数据 
map.set(key,1);
console.log(map.get(key));
key = null 
map.delete(key)
global.gc() // 手动垃圾回收