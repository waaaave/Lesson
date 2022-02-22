import express from 'express'
import userRouter from '../user/user.router'
import {defaultErrorHandler} from './app.middleware'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use( userRouter )

app.use( defaultErrorHandler )

export default app;