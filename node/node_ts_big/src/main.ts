// 单点入口
import app from './app';
import { APP_PORT } from './app/app.config'
import { connection } from './app/database/mysql'
// console.log(process.env)
// console.log('hello, ts big')

// const APP_PORT  = 3000 // 常量

app.listen(APP_PORT, () => {
  console.log('服务已经启动')
})

connection.connect(error => {
  if (error) {
    console.log('连接数据库失败', error.message);
    return
  }
    console.log('成功连接数据库');

})