//一分为二  本地运行 还有服务器运行
//node 告知当前运行环境

// console.log(process.env);//进程包含的当前运行环境
//     "dev": "cross-env NODE_ENV=development node app.js"
// npm run dev cross-env npm 包 解决mac linux windows 临时环境变量 NODE-ENV：development
// process.env 进程对象，env 对象中

if(process.env.NODE_ENV == 'development'){
  //mysql 本地 root 123456
  console.log('本地开发环境');

}else if(process.env.NODE_ENV == 'production'){
  //未来在服务器上数据库是分离开的
  //mysql 服务器  复杂
  console.log('线上环境');
}