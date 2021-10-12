// promise 解决es5中回调地狱
// 1.洗菜做饭 2.坐下吃饭 3.收拾洗碗

let state = 1;

function step1(resolve,reject){
    console.log('开始洗菜做饭');
    if(state==1){
        resolve('洗菜做饭完成')
    }else{
        resolve('洗菜做饭失败')

    }
}
function step2(resolve,reject){
    console.log('开始坐下吃饭');
    if(state==1){
        resolve('坐下吃饭完成')
    }else{
        resolve('坐下吃饭失败')

    }
}
function step3(resolve,reject){
    console.log('开始收拾洗碗');
    state = 0;
    if(state==1){
        resolve('收拾洗碗完成')
    }else{
        resolve('收拾洗碗失败')

    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
    console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
})