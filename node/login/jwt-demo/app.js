import Koa from 'koa'
import views from 'koa-views'
import Router from 'koa-router'
import path from 'path'
import koaBodyParser from 'koa-bodyparser'
import jwt from 'jsonwebtoken'
import verify from './verify'

export const secret = 'ljxlyl999'

const router = Router();

const users = [
    {
        id: 1,
        name: 'admin',
        pwd: '123456',
        userInfo: {
            age: 20,
            sex: '男'
        }
    }
]

const app = new Koa()
app.use(
  views(
    path.join(__dirname, './views'), {
      extension: 'ejs'
}))

app.use(koaBodyParser())

router.get('/login', async function(ctx) {
  let title = 'hello jwt'
  await ctx.render('index', {
    title
  })
})

router.post('/login', async function(ctx) {
    // 用户在表单里写了什么
    const {name, pwd} = ctx.request.body
    if (!name, !pwd) ctx.body = '出错了'
  
    let index = users.findIndex((user) => user.name==name && user.pwd==pwd )
    if (index != -1) {
      // 服务器端下放令牌环
      const token = jwt.sign({
        user: users[index],
      }, secret, {
        expiresIn: 60
      })
      ctx.body = {
        code: 200,
        token
      }
    }
  })

router.post('/verify', async function(ctx) {
    const {token} = ctx.request.body
    try {
        const payload = jwt.verify(token, secret)
        console.log(payload);
        ctx.body = payload
    } catch(e) {
        ctx.json = {
            code: 500
        }
    }
})

// 登录了 ->  jwt-verify
// 未登录 ->  跳转登录 
// 洋葱模型 
// router.get('/userInfo', verify, (ctx) => {
  router.get('/userInfo', verify, (ctx) => {
    ctx.body = {
      code: 200,
      user: ctx.user || {}
    }
})


router.get('/showUser', async (ctx) => {
    await ctx.render('showUser')
})

app
  .use(router.routes())
  .use(router.allowedMethods());
  
app.listen (1234, () => {

})