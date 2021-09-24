import logo from './logo.svg';
//static静态资源 css 引入全局样式
import './static/css/index.css';
import './App.css';
import Header from './component/header';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

function App() {
  return (
    <Layout className="page">
      <Header />
      <Layout.Content>
        <Switch>
          <Route path="/juejing" render={() => {
            return <div>juejing</div>
          }} />
          <Route path="/blog" render={() => {
            return <div>Blog</div>
          }} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
}

export default App;
