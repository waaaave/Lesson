import { NextFunction, Request, Response } from "express";
import * as userService from './user.service'

export const store = async (
  
  request:Request,
  response:Response,
  next:NextFunction
) => {
  // 兼具了中间件和controller 的使命
  // 中间件是node 的开发特色
  // console.log(request.body,'aaaaaaaaaaaa');
  const {name, password} = request.body
  try {
    const data = await userService.createUser({name, password})
    response.status(201).send(data)
  } catch (error) {
    next(error)
  }
}