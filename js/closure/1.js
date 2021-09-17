let a = 3 //在全局作用域下文中声明了一个新变量,赋值为 3。
//执行栈
function addTwo(x) { //addTwo 在全局作用下的变量
//     括号内的内容分配给 adadaTwo
//     代码存储空间
    let ret = x + 2; //x ret 开始的值为 undefined
    return ret; //在当前addTwo执行上下文中找到ret
    //执行栈弹出addTwo 上下文，销毁其作用域中变量，垃圾回收
}
let b = addTwo(a); //在全局作用域声明了一个 b undefined
console.log(b);