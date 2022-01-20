// 数据库连接
const { 
  Sequelize,
  Model
} = require('sequelize')

const db = new Sequelize('ssrblog', 
'root', '123456', {
  dialect: 'mysql', // mysql2驱动
  host: 'localhost',
  port: 3306,
  logging: console.log,
  timezone: '+08:00',
  define: {
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      underscored: true,
      freezeTableName: true,
      scopes: {
          bh: {
              attributes: {
                  exclude: ['updated_at', 'deleted_at', 'created_at']
              }
          }
      }
  }
})

module.exports = {
  db
}