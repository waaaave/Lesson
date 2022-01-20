// RESTFUL?
//   接口url设计风格
//  GET /book
//      /book/:id
//  POST /book

const router = require('koa-router')()
const book = require('../controller/book.js')

router.get('/book/list', book.getList)
router.get('/book/:id', book.getOne)
router.post('/book', book.add)

module.exports = router