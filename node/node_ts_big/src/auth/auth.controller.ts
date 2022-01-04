import {
  Request,
  Response,
  NextFunction
} from 'express'

export const login = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  next(
    new Error('NEED_PASSWORD')
    
  )
}
