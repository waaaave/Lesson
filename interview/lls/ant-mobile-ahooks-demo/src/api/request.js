
export const getUsername = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('jack')
            reject('error')
        }, 2000);
    })
}