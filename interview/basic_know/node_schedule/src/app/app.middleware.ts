import { Request, Response, NextFunction  } from "express"

export const defaultErrorHandler = (
  error: any,
  request:Request,
  response:Response,
  next:NextFunction
) => {
  if (error.message) {
    console.log(error.message);
  }

  let statusCode: number,
    message:string;
    switch(error.message){
      case 'NAME_IS_REQUIRED':
        statusCode = 400 // 用户少传了东西用400 Bad Request
        message = '请提供用户名'
        break;
      case 'PASSWORD_IS_REQUIRED':
        statusCode = 400 
        message = '请提供密码'
        break;
      case 'REPASSWORD_IS_REQUIRED':
        statusCode = 400 
        message = '请确认密码'
        break;
      case 'USER_ALREADY_EXIST':
        statusCode = 409 // conflict
        message = '名称已存在'
      default:
        statusCode:500;
        message:'服务器开小差了~'
        break;
    }
    response.status(statusCode).send({message})
}