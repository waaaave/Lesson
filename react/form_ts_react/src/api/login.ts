import { LoginEntity } from '../model/login'

// 表单以json对象的模式传递值
// ts 开发接口条理
//  1. 接口 api 都是 Promise 可以通过泛型的约定 可以对 resolve reject 后的结果去约定
//  async let isLogined = await isValidLogin
//  2. 在做接口请求时，带来参数 接口约定参数
//    多人协作的时候
//    let isLogined = await isValidLogin({ login: })
//  接口一般不变, 组件是每天都可能变
export const isValidLogin = (loginInfo: LoginEntity): Promise<boolean> => new Promise((resolve) => {
  setTimeout(() => {
    // if (loginInfo.login === 'admin' && loginInfo.password === 'test')
    // resolve( true )
    // else resolve(false)
    resolve(loginInfo.login === 'admin' && loginInfo.password === 'test')
  }, 1000);
})