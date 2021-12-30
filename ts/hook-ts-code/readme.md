- 如果不使用 ts-node 如何一次性完成 ts 文件运行
  node hook.js ./test.ts
  1. 查找 系统中环境变量 node 安装包所在
  2. hook.js ./test.ts 命令行上的参数
  3. 如何拿到传递的第三个参数？  node 那个模块拿到命令行的参数

- require 发生了什么
  1. 根据文件路径字符串 
    path.resolve 有效的路径， 报错
  2. 可以定制引入某类型的文件的处理方法
    require.extensions['.ts'] = module,
    读取文件 fs.readFileSync(path.resolve())
    ts.transpileModule 转义
    得到 js 文本内容
    再调用module._compile  运行