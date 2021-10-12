//map
let json = {
    name:'wave',
    skill:'tt'
};
console.log(json.name);

var map = new Map();
map.set(json,'woshi') //赋值
console.log(map);
map.set('wave',json)
console.log(map);
console.log(map.get(json)); // 取值
map.delete(json);
console.log(map);
// map.clear();
console.log(map .size);
//查找用has