function *foo(x){
    let y = 2*(yield(x+1))
    let z = yield(y/3)
    return (x+y+z)
}
let it = foo(5) // 只返回一个迭代器 函数不执行
console.log(it);
console.log(it.next());
console.log(it.next(12));
console.log(it.next(13));

function *fetchData(){
    let res1 = yield ajax(url, () => { })
    let res2 = yield ajax(res1, () => { })
    let res3 = yield ajax(res2, () => { })
}

let tt = fetchData();
let result1 = tt.next()
let result2 = tt.next()
let result3 = tt.next()