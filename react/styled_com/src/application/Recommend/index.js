import React from 'react';
import { renderRoutes } from "react-router-config";
import {Content} from './style'
//  UI组件 数据流 React ReactDom Rdeux React-Redux
import {connect} from 'react-redux'

function Recommend(props) {
  // store -> provider -> connect -> Recommend
  const { route, songsCount } = props
  return (
    <Content play={songsCount}> 
      
    {renderRoutes(route.routes)}
    </Content>
  )
}

// 高阶组件 connect -> Provider -> Store
const mapStateToProps = (state) => ({
  songsCount:1
})
const mapDispatchToProps = () =>{
  return{

  }
}
// connect() 高阶函数 参数或者返回值是函数
// 返回值也是函数， Recommend UI作为他的参数
// 返回值也一定是一个组件 这就叫做高阶组件
// 函数的参数是组件，返回值是组件的话 ， 就叫高阶组件
export default connect(mapStateToProps,mapDispatchToProps)(Recommend)
