import { NextFunction, Request, Response } from "express";

export const validateUserData =async (
  request:Request,
  response:Response,
  next:NextFunction
  ) => {
    // 代码级别报错
    // throw new Error('NAME_IS_REQUIRED')
    next(new Error('NAME_IS_REQUIRED'))
}