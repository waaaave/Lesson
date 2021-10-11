import {createElement,render } from './element';

//JSX ->createElement react
//真实DOM 内存中虚拟的DOM 就是Element树
//虚拟DOM可以立马转变成真实DOM
let virtualDOM = createElement ('ul',{class:'list'},[
  createElement('li',{class:'item'},['周杰伦']),
  createElement('li',{class:'item'},['林俊杰']),
  createElement('li',{class:'item'},['王力宏'])
])

// console.log(virtualDOM);
let el = render(virtualDOM);
document.getElementById('root').appendChild(el);

// 浏览器底层 有一个JS引擎v8 
// html css 渲染层
//打交道从一个世界到达另一个世界
// VDOM 有两棵,都在内存之中,
//表达的是原来的状态数据MVVM之后新的状态树 一次性收集DOM要修改的地方[url.class ,li class text]
// 差异让界面更新
//一次性通往渲染层更新DOM

//第二棵虚拟DOM树
// VD 的意义,用来比较
let virtualDOM2 = createElement('ul',{class:'list-group'},[
   createElement('li',{class:'item active'},['七里香']),
   createElement('li',{class:'item'},['飞云之下']),
   createElement('li',{class:'item'},['十二生肖'])
]) 
let el2 = render(virtualDOM2);
document.getElementById('root').appendChild(el2);
