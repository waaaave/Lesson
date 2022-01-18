const router = require('koa-router')()
const user = require('../controller/user.js')

router.post('/user/regist', user.regist)

module.exports = router