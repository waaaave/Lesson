# react 前端项目
  - 先做一个纯前端项目 url + json  jsonserver
  - 先上线，然后用node/go 写真正的后端

  - json-server 简单写restful 功能强大 增加了项目的复杂度 纯前端复杂化了
  - fast mock 简单方便，restful 不够直接
  - mockjs 这种使用
  
  先用一个纯前端知识搞定
  /api/list  请求
  上线之后切换为后端接口 真实数据

- 前端要数据 有哪些方案
  1. 向url发送请求
  2. 请求之后响应的数据

  - node + mysql 真实数据
  - mockjs 构建一个假的数据接口
  
  - Resful
    - 一切皆资源
    - 请求动作 + url 请求
      get post post可以进行修改删除等操作
      put(文件替换) patch(某个字段局部) 更新资源
      head 

  - mockjs
    - online（可视化）