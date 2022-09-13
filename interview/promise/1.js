// promise .all方法

new Promise((resolve, reject) => {
    console.log('new Promise');
    // 立即执行 excutor
    resolve('success')
    // 无效
    reject('reject')
})
console.log('finish');