- 分词 token
    import 依赖关系
    let 定义变量 var
- 抽象语法树 AST
    npm包做这些事情

- @babel/core @babel/preset-env  es6 ->es5
- @babel/traverse 一直
- babylon AST

- 从入口文件开始，使用Babylon 分词， 生成抽象语法树 AST
- Babel traverse 便利token节点
- 将AST交给babel/core 的 transformFromAst 和@babel/parse-env转译，完成es6-es5
- 分析依赖关系，递归调用，完成编译
- css等其他静态资源单独处理
- 根据webpack等打包工具的语法将代码写入 bundle.js

build.js
import B from './b.js' // 依赖关系 需要递归处理 存在打包顺序的问题
import './common.css' // 静态资源 转换
let a = 1 + B.b // es6 -> es5 bable bable/preset-env
console.log(a); // 打包后index文件可以运行