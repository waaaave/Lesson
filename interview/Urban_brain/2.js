// 手写instanceof
//  MDN instanceof 运算符用于测试构造函数的prorotype属性是否出现在对象原型中的任何位置
//  A instenceof B A 一定是对象 (起点)  B 一定是一个函数

function instance_of(L, R){
    var O = R.prototype
    L = L.__proto__
    while(true){
        if (L === null) {
            return false
        }
        if (O === L) {
            return true
        }
        L = L.__proto__
    }
}

console.log(instance_of([1,2,3], Array))