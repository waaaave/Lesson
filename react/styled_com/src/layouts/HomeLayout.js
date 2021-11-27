import { renderRoutes } from "react-router-config";
import { NavLink } from 'react-router-dom'
import { Top, Tab, TabItem } from './HomeLayout.style'
// 首页的layout 布局 Router > Layout > Pages > Component 
function Home(props) {
  const { route, history } = props;
  return (
    <div>
      {/* 用样式组件切页面 css in js */}
      <Top>
        <span className='iconfont menu'>
          &#xe65c;
        </span>
        <span className='title'>网抑云</span>
        <span className='iconfont search' onClick={() => history.push('/search')}>
          &#xe62b;
        </span>
      </Top>
      {/* Tab>TabItem 父子组件  List> ListItem Menu> MenuItem */}
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </NavLink>
        <NavLink to="/singer" activeClassName="selected">
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </NavLink>

      </Tab>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Home;
