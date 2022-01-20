const { Book } = require('./book')

const {
  Sequelize, // 模型定义文件
  Model // 
} = require('sequelize')
// 连接数据库
const { db } = require('../core/db')

function init() {
  // 给数据表设置模型
  // sequelize 翻译
  Book.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    url: Sequelize.TEXT,
    img: Sequelize.STRING,
  }, {
    sequelize: db,
    tableName: 'book'
  })
}

module.exports = {
  init
}
