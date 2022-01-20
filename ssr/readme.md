1. 写一个项目
  先刷力扣 然后开始写项目 3h+
  react项目  + node

2. 课程
  ssr 服务器端渲染
  react 源码
  山月 面试题
  node 
  算法


ssr 应用往往是全栈开发的标配

- 目录
  1. app
    前端
  2. server 
    后端
  3. build 工程化目录
    打包

- 工程化进入主角， build 有很多的webpack配置文件
  - webpack.base.config.js
  - utils.js

- 打包的本质 从入口， 整理文件依赖关系， 按先后顺序打包
- 把 node_modules 里react 等库里文件 分离一下
  webpack 打包提速
  组件需要频繁打包，频繁发布
  code splitting之后要发布的文件就小了
  vendor.js 可以缓存

- 虚拟DOM 内存编译
  webpack 为提升编译速度， 在开发阶段， 编译到内存
  build 才生成 dist文件

- design dbs 
  - book
    从服务端book list /book/:id
    在服务器端拿完 编译再输出 SEO
    CREATE TABLE book (
      `id` INT UNSIGNED AUTO_INCREMENT,
      `name` VARCHAR(100),
      `URL` VARCHAR(255),
      `img` VARCHAR(255),
      `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      `deleted_at` TIMESTAMP NULL,
      PRIMARY KEY(id)
    )engine=innodb

- InitManger koa 中枢
  1. 在入口文件开始启动  要克制
    InitManager.initCore(app)
  2. core/
      InitManager
      2.1  InitManager.initLoadRouters(app) 初始化加载路由
        requireDirectory
      2.2  initModels 初始化模型， 为了获得 squelize
  3. 链接数据库
    const m = require('../models/index')
  4.  const { db } = require('../core/db')
      /core/db 链接数据库， 返回当前实例
  5. mysql 使用的sql对于node来说是一门外语，sequelize是翻译
    5.1 在models/index.js中 做ORM映射
      任何一个sequelized Model上有 init 方法 传递一个对象 根据每个字段进行类型的定义
    5.2 book.js
      extends Model
    5.3 Book.create({传值})
    
