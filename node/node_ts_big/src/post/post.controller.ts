import {
  Request,
  Response,
  NextFunction
} from 'express'

export const index = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // 数据库的异步
  // response.send({
  //     a: 1
  // })
  next(
    new Error('当前控制器出了问题')
  )
}
