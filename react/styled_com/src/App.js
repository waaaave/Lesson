import './App.css';
import {GlobalStyle} from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import styled from 'styled-components';

const Top = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  padding:5px 10px;
  background: red;
  &>span{
    line-hight:40px;
    color:#f1f1f1;
    font-size:20px;
    &.iconfont{
      font-size:25px;
    }
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <IconStyle/>
      
      <i className="iconfont">&#xe62b;</i>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
    </div>
  );
}

export default App;
