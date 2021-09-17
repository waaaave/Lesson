let c = 4
// const addX = x => n => n +x;
const addX =function(x){
    return function(n){
        return n+x;
    }
}
const addThree = addX(3); // 记忆函数
let d = addThree(c)
console.log(d);