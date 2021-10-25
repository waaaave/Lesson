import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Index(){
    return<h2>wave</h2>
}
function List(){
    return<h2>waaaave</h2>

}
function Example(){
    const [count , setCount] = useState(0)  
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click Me</button>

            <Router>
                <ul>
                    <li><Link to = '/'>首页</Link></li>
                    <li><Link to = '/list'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list' component={List} />
            </Router>
        </div>
    )
}
 
export default Example;