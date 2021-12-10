import jwt from 'jsonwebtoken'
import { secret } from './app'

const verify = (ctx, next) => {
  // 登录校验
  const token = ctx.request.headers['authorization']
  // console.log(auth);
  // console.log('varify 离场了');
  if (!token) {
    ctx.body = {
      code: 401,
      message: '请登录'
    }
  }
  try {
    const payload = jwt.verify(token, secret)
    // 如何从这个中间件把数据往下传
    ctx.user = payload
    next()
  } catch (err) {
    ctx.body = {
      code: 500,
      message: '过期了'
    }
  }

}

export default verify