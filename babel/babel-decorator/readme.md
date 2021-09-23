1.  babel 标准流程
    让 js 更加强大的工作流套件
    js 翻译工作， 翻译成为以前的浏览器能用的语句
    可以让任何 js 的最新特性 + preset-env (预处理) 可以做一般的编译
    decorator 特性
    - 代码放在 src 目录 最新的特性
    - 编译到 dist 目录 任何浏览器
    - npm init -y 把项目变成 node 项目，工作流程
    - npm i --save-dev @babel/cli@babel core@babel preset-env
    - package.json scripts
      "dev":"babel src/ -d dist"
    - .babelrc
      {
      "preset":"@babel.preset-env"
      }
    - npm run dev
    - jsconfig.json
      让 vscode 不报错
