const {
  Book
} = require('../models/book');

module.exports = {
  async getList(ctx) {
    // console.log('getList');
    const rows = await Book.findAll();
    // console.log(rows,'22222222222222222222222222222');
    ctx.body = {
      msg:'OK',
      code:'0000',
      data: rows,
      request: `${ctx.method}${ctx.path}`
    }

  },
  async getOne() {
    console.log('get One');
  },
  async add(ctx) {
    const {name, url, img } = ctx.request.body
    const book  = {
      name,
      url,
      img
    }
    console.log(name, url, img);
    if(!name || !url || !img){

    }else{
      // 链接数据库
      // select不用写 用ORM工具 sequelize
      // service
      await Book.create(book)
      ctx.body = {
          msg: '创建成功',
          code: '0000',
          isOk: true
      }
      ctx.status = 200

    }
  }
}