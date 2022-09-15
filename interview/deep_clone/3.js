let arr = [1,2,3,4]
// let arr2 = arr //浅拷贝 引用时赋值

// let arr2 = arr.slice(0);
let arr2 = arr.concat();
console.log(arr2);
arr2[1] = 6
console.log(arr);
console.log(arr2);

let arr3 = [{name:'wave'},{name:'white'}]
let arr4 = [].concat(arr3)

arr4[1].name = 'lls'

console.log(arr3,arr4);