- 引入 antd
  1. yarn add antd
  2. import {Button} from 'antd';
  3. 全局引入 css
     @import '~antd/dist/antd.css/'
     ~ 会找到 node_modules webpack ~ =>短链接


- react 全家桶之路由
  1. yarn add react-router-dom
  2. 在react中不能用a标签,单页应用
  3. 全局都用
    index.js
    import {BrowserRouter} from 'react-router-dom';
  4. {Link}