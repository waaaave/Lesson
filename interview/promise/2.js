Promise.resolve(1) // promise 的静态方法
.then( res => {
    console.log(res);
    return 2
})
.then(res=>console.log(res))