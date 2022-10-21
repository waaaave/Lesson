const isArr = (obj) => {
    let type
    (obj instanceof Array) ? type = 'Array' : (obj instanceof Object)? type = 'Object' : type =  false
    return type
}

const a= [1,2,3,4]
const b = { as: 1}
const c= 1

console.log(isArr(a));
console.log(isArr(b));
console.log(isArr(c));