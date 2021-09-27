- 使用连接 a 标签导航串联起了网站

  1. 每个页面都是独立的
     每个页面都有 html head body
     head，body，nav 都是重复的
  2. 重新渲染
  3. http 协议 要得到新内容。必须再请求服务器
  4. 无状态 断开的简单协议
     不跳页
     ajax+DHTML

- 单页应用的概念 SPA
  index.Hml
  index.html
  挂载在 root
  a 标签炮绝了
  import{Link} from 'react-router-dom';
  Link a preventDefault()?
