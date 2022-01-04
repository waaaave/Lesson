// 服务器实例模块化
import express from 'express'
import { defaultErrorHandler } from './app.middleware'
import postRouter from '../post/post.router'
import authRouter from '../auth/auth.router'

const  app = express()
// 路由 中间件的定义

app.use(
  postRouter,
  authRouter
)

// 处理错误
// 洋葱模型
app.use(defaultErrorHandler)

export default app