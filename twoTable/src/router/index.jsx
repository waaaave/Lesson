/**
 * @router 前端路由配置
*/

import React from 'react'
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom'

import Detail from '../views/Detail'
import Home from '../views/Home'

const Router = () => {
  
  return (
    <BRouter>
      <Switch>
      <Route
          exact
          path='/'
          component={Home}
        ></Route>
        <Route
          path='/detail'
          component={Detail}
        ></Route>
      </Switch>
    </BRouter>
  )
}

export default Router;