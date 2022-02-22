import { NextFunction, Request, Response } from "express";
import * as userService from './user.service'
import bcrypt from 'bcrypt'

export const validateUserData =async (
  request:Request,
  response:Response,
  next:NextFunction
  ) => {
    // 代码级别报错
    // throw new Error('NAME_IS_REQUIRED')
    // next(new Error('NAME_IS_REQUIRED'))
    // console.log('validata');
    console.log(request.body);
    const {name, password, repassword} = request.body
    if (!name) return next(new Error('NAME_IS_REQUIRED'))
    if (!password) return next(new Error('PASSWORD_IS_REQUIRED'))
    if (!repassword) return next(new Error('REPASSWORD_IS_REQUIRED'))

    const user = await userService.getUserByName(name)
    if (user) return next(new Error('USER_ALREADY_EXIST'))
    next()
}

// 中间件 --> 把一个大的问题，交给一系列的中间件来依次来完成
// 一个用户生成 起因是用户通过 post 方法在users中 携带了name和password属性
// 拆分成 1. 校验输入 2. 密码加密 3. 数据保存
export const hashPassword = async (
  request:Request,
  response:Response,
  next:NextFunction
) => {
  // console.log('hash');
  // 首先是把password
  const { password } = request.body
  request.body.passwprd = await bcrypt.hash(password, 10)

  next()

}