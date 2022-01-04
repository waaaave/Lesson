// 需要mydql的驱动
import mysql from 'mysql2'
import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from '../app.config'

console.log(process.env.MYSQL_DATABASE, '///',MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER , '///////')

export const connection = mysql.createConnection({
  host: MYSQL_HOST,
  port: +MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
})