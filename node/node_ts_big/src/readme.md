- 项目的技术构成
  1. 启动ts
    tsconfig.json
  2. ts-watch

- src/**/* 匹配目录下所有目录
    src/main.ts

- tsc-watch --onSuccess \"node dist/main.js\"
    tsc typescript tsconfig.json -> outDir -> dist/main.js

- APP_PORT / mysql 的信息都属于敏感数据
  端口号和数据库密码应该放到 .env 文件中
  var_name = var_value
  dotenv 的库来读取
  dotenv.config()
  读取目录下的.env文件
  添加到process对象的.env对象中
  process.env.APP_PORT
  环境参数对象

- process.env 报错？ 
  process 不报错
  process.env 类型的查找？ 找不到 @types/node process类型声明
  环境变量