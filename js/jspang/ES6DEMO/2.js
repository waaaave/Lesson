//json的数组格式

let json = {
    '0':'wave',
    '1':'星客',
    '2':'waaave',
    length:3
}

let arr = Array.from(json); // json数组->数组
console.log(arr);


//Array.of 方法*********
let stt = [3,4,5,6]
let arr1 = Array.of(3,4,5,6);
console.log(Array.of(stt));
console.log(arr1);

// find() 实例方法
//arr.find(function(value,index,arr){}
let arr2 = [1,2,3,4,5,6,7,8,9];
console.log(arr2.find(function(value,index,arr){
    return value>5;
}));

// fill 实例方法

let arr3 = ['123','234','345'];
console.log(arr3);
arr3.fill('999',1,2)
console.log(arr3);

// 数组循环 for of
for (const item of arr3) {
    console.log(item);
}
for (const item of arr3.keys()) {
    console.log(item);
}
for (const [index,val] of arr3.entries()) {
    console.log(`${index} : ${val}`);
}

//entries
let arr4 = [3,1,4,2,5,9,2,6,5,3];
let list = arr4.entries();
console.log(list.next().value);
console.log('------------');
console.log(list.next().value);
console.log('******************');
console.log(list.next().value);
console.log('++++++++++++++++');