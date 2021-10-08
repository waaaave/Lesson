import './App.css';
import {Link ,Switch,Route} from 'react-router-dom'
import Topic from './view/topic';
import {route} from './router/index'
console.log(route);
function App() {
  return (
  <>
    {/* <Link to ="/topic/aaa">纯HTML缩进的写法</Link> */}
    <Link to ="/topic/615d0389fe0c5184d0aecc53">纯HTML缩进的写法</Link>
    <Switch>
      {route.map((item,index)=>{
        return(
          <Route
          key={index}
          path={item.path}
          exact={item.exact}
          render={(props)=>{
            console.log(props);
            return item.render(props)
          }}
          />
        )
      })}
    </Switch>
    {/* <Topic/> */}
  </>
  );
}

export default App;
