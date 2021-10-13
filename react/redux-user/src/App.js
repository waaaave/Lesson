import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import User from './pages/user';
const App = () =>{
  return (
    <div>
      <Link to ='/user/sunboy25'>sunboy25</Link>
      <Switch>
        <Route path="/user/:loginname" component={User} />
      </Switch>
    </div>
  )
}

export default App;