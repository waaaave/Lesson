"use strict";

// var a = "wave";
// var b = "wave";

// // console.log(a);

// // window.onload = function(){
// //     console.log(a);
// // }

// {
//     var a = "星客";
//     let b = "星客";
// }
// console.log(a);
// console.log(b);

// for(let i = 0; i< 10;i++){
//     console.log("inline"+ i );
// }
// console.log("outline" + i);

// const a = "wave";
// var a = "星客";

// let[a,b,c] = [0,1,2]
// console.log(a);
// console.log(b);
// console.log(c);

// let[foo='true'] = [];
// console.log(foo);

// let [a,b='wave']=['星客'];
// console.log(a+b);

// let {foo,bar} = {foo:'wave',bar:'星客'};
// console.log(foo+bar);

// const [a,b,c,d] = 'wave';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let arr1 = ['www','wave','com'];
// let arr2=arr1;
// console.log(arr2);
// arr2.push('xtk');
// console.log(arr1);

// let arr1 = ['www','wave','com'];
// let arr2=[...arr1];
// console.log(arr2);
// arr2.push('xtk');
// console.log(arr2);
// console.log(arr1);

// function wave(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
// }

// wave(1,2,3);

function wave(first) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arg[_key - 1] = arguments[_key];
    }

    console.log(arg.length);
    console.log(arg);
}
wave(0, 1, 2, 3, 4, 5, 6, 7); //7
