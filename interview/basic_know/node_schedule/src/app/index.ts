import express from 'express'
import userRouter from '../user/user.router'
import {defaultErrorHandler} from './app.middleware'

const app = express()

app.use( userRouter )

app.use( defaultErrorHandler )

export default app;