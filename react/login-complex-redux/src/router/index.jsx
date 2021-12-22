import React from 'react';
import { Route, HashRouter, Switch, Redirect} from 'react-router-dom'
import Login from '../views/login/index.jsx'
import { getToken } from '../utils/auth.js';
import Layout from '../Layout'

const Router = () => {

  let token = getToken()

  return(
    // Provider 的孩子
    <HashRouter>
      <Switch>
        <Route
          path='/login'
          component={Login}
        />
        <Route 
          path='/'
          render={() => {
            if(!token){
              return <Redirect to='/login'/>
            }else{
              console.log('已登录');
              return <Layout />
            }
          }}
        />
      </Switch>
    </HashRouter>
  )
}

export default Router