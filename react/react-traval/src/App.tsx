import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import {HomePage} from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={HomePage}/>
        <Route path='/signIn' render={(()=><h1> 登陆界面</h1>)}/>
        <Route path='/detail' render={(()=><h1> 详情</h1>)}/>
      </Router>
    </div>
  );
}

export default App;
