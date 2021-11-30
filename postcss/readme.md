- postcss 
  js -> babel  css -> stylus

- babel can do == 不支持的版本可以转换成支持的  css3 -> css next
  es6->es5
  css -> postcss css4 -> css3

  在移动端px有问题 css像素 和 物理像素不一致
  所以使用rem作为单位 因为是等比例的
  如果在公司开发前端的时候，会拿到一个设计稿，对着设计稿写，要选择一个设计的基准 iphone 750px

  psd -> 蓝湖 -> px(750标准) 
  10rem = 100% 1rem 动态设置
  px自动转化为rem 

- postcss 负责css文件从一种形态转变成另一种形态 为的是适合我们的需要