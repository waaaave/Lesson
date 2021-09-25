import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import {routes} from './router/index'
// import 'antd/dist/antd.css';

// react-router-dom 提供了一系列的组件， react组件化非常完美
import { 
  Link,
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect,
  useHistory,
  useParams,
  useLocation
} from 'react-router-dom';
import {
    Layout,
} from 'antd';
// document.createElement('div')
const App = () => {
  return (
    <Router>
     <Layout className="page">
         <Header/>
         <Layout.Content>
             <div className="wrap">
                 <Switch>
                     {/* <Route to="/" exact component render /> */}
                    {
                        routes.map((route,index)=>{
                            return(
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact ={route.exact}
                                    render={(props)=>{
                                        return route.render(props)
                                    }}
                                >

                                </Route>
                            )
                        })
                    } 
                 </Switch>
             </div>
         </Layout.Content>
     </Layout>

    </Router>
  )
}

const Home = () => (
  <>
    <h1>Home</h1>
    <FakeText />
  </>
)
const About = () => {
  // console.log(name, '-------');
  const {name} = useParams();
  const history = useHistory(); // hooks 函数 
  const { pathname } = useLocation();
  console.log(history, pathname);
  return (
    <>
      {/* 登录 路由守卫 */}
      {name !== '发哥'?<Redirect to="/" /> : null}
      <h1>About: {name}</h1>
      <Button type="primary">按钮</Button>
      <button onClick={() => history.push("/")}>Go to home</button>
      <FakeText />
    </>
  )
}
const Concat = () => (
  <>
    <h1>Concat</h1>
    <FakeText />
  </>
)

const FakeText = () => (
  <p>
    faker nb!
  </p>
)
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)