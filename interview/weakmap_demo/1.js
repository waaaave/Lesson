// 容器 数据结构
// o(1)
//对象字面量 为了简化new Object() key 是无序的， key只能是string 可以使用symbol确保唯一性
const map = new WeakMap()
// map.set({a:1},2)