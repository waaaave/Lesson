import { request } from './request'
import { LoginParams } from '../interface/user/login'

// 大型项目中,所有interface放在同一目录下
// axios 封装 所有的请求都有共同的需求
// 1. baseURL
// 2. 请求头 token localStorage
// 3. 失败 
// 4. timeout
// 5. 成功请求的时候加上状态码 status:true message

export const apiLogin =(data:LoginParams) => request('post', '/user/login', data)