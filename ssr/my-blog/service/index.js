const Koa = require('koa')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const PORT = process.env.PORT || 4000
const InitManager = require('./src/core/init.js')

app.use(require('koa-static')(__dirname+'/public'))
app.use(
    bodyParser({
        enableTypes: ['json', 'form', 'text']
    })
)
app.use(views(__dirname + '/src/views', {
    extension: 'ejs'
}))
// sevice abstract
InitManager.initCore(app)

app.listen(PORT, () => {
  console.log(`koa is running on ${PORT}`);
})