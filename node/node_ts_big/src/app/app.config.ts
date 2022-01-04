import dotenv from 'dotenv'
dotenv.config()

// node 内置的进程对象 env 环境对象
export const { APP_PORT } = process.env

export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
} = process.env
