const map = new WeakMap(); // Map的进化版本 弱弱的hashmap
const map2 = new Map();
map2.set(1,2);
map.set(1,2); // weakmap 的key 不能是简单数据类型 一定是复杂数据类型