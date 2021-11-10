- instanceof 左侧是对象 右侧是构造函数
- 手写的时候，要记住逻辑点
  1. 左侧用typeof 不是 obj 就false
  2. 沿着原型链一直查找（递归）
    - 找到了
    - 没找到，找到头了，null