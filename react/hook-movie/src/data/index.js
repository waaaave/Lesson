// 为什么要用require不用js?
// 底层是 webpack + babel 可以用import 
// mockjs 是以node的方式运行  可以给模糊数据
// list叫什么不重要 甚至可以给一个随机数
// 其他的以 es6 的前端方式运行
var Mock = require('mockjs')
var data = Mock.mock('/mock', {
  "userinfo|24": [{
    "id|+1": 1,
    "name": "@cname",
    "age|18-28": 25
  }]
})

export default data;