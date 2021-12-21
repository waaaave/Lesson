import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Home from './demo/Home'
import App from './App'
import NOTFOUND from './demo/NOTFOUND'
// 动态加载
// import DemoB from './demo/DemoB' // 立即加载
// import DemoA from './demo/DemoA'
const DemoA = lazy(() => import('./demo/DemoA')) // 延迟加载
const DemoB = lazy(() => import('./demo/DemoB'))



ReactDOM.render(

  <div>
    Main
    <br />
    <App/>
    {/* 路由部分 ==> 动态规划部分  == lazyload 的主战场 */}
    {/* <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <NavLink to='/demoA'>DemoA</NavLink>
        <br />
        <NavLink to='/demoB'>DemoB</NavLink>
        <Switch>
        <Route path='/' component={Home} />
          <Route path='/demoA' component={DemoA} />
          <Route path='/demoB' component={DemoB} />
          <Route component={NOTFOUND} />
        </Switch>
      </Router>
    </Suspense> */}
  </div>,
  document.getElementById('root')
)
