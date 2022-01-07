import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom'
import './bottom.css'
import { connect } from 'react-redux';
import HeadNumIcon from '../../common/headNumIcon/HeadNumIcon.jsx'
import { actionCreators } from '../../pages/Main/store';

const Bottom = (props) => {
    const { route, num, index } = props;
    const { setIndexDispatch } = props

    return (
        <>

        {/* fdfdasfafaafdas */}
        {/* 二级路由而准备 */}
        {renderRoutes(route.routes)}
        <ul className="Botton-warper">
            <li 
            onClick={()=>{setIndexDispatch(0)}}
            className="Botton-warper-warp" 
            key="1">
                <Link to="/home/main" 
                style={{textDecoration:"none"}}>
                    <div>
                        <div className="icon" style={
                            index===0?
                            {backgroundPosition: "0rem -.8333rem"}
                            :{backgroundPosition: "0rem 0px"}
                        }>
                        </div>
                        <div 
                            style={index===0?{color: '#ec564b'}:{}}
                            className="planet">首页</div>
                    </div>
                </Link>
            </li>
            <li className="Botton-warper-warp" key="2"
                onClick={()=>{setIndexDispatch(1)}}>
                    <Link to='/home/server' style={{textDecoration:"none"}}>
                        {/* style={{ backgroundPosition: "-1.685rem 0px" }} */}
                        <div className="icon" style={
                            index===1?
                            {backgroundPosition:"-1.685rem -.833rem"}:
                            {backgroundPosition:"-1.685rem 0px"}}></div>
                        <div className="planet"style={index===1?{color:"#ec564b"}:{}}>
                            全部服务
                    </div>
                    </Link>
                </li>
                <li className="Botton-warper-warp" key="3"
                onClick={()=>{setIndexDispatch(2)}}>
                <Link to='/home/info' style={{textDecoration:"none"}}>
                {/* style={{backgroundPosition:"-93px 0px"}} */}
                    <div className="icon" 
                    style={
                        index===2?
                        {backgroundPosition:"-2.528rem -.833rem"}:
                        {backgroundPosition:"-2.528rem 0px"}}></div>
                    <div className="planet"style={index===2?{color:"#ec564b"}:{}} >
                            消息
                            <HeadNumIcon
                              display="" 
                              top="-0.92rem" 
                              left="1.5rem" 
                              num="9"/>
                    </div>
                </Link>

                </li>
                <li className="Botton-warper-warp" key="4"
                onClick={()=>{
                  setIndexDispatch(3);
                } }>
                    <Link to='/home/my' style={{textDecoration:"none"}}>

                        <div className="icon" 
                        style={
                            index===3?
                            {backgroundPosition:"-3.333rem -.833rem"}:
                            {backgroundPosition:"-3.333rem 0px"}}></div>
                        <div className="planet" style={index===3?{color:"#ec564b"}:{}}>
                        我的 
                        </div>
                    </Link>
                </li>
        </ul>
            {/* tabbar位置 */}
        </>
    )
}

const mapStateToProps = (state) => {
  return{
    num: state.main.num,
    index: state.main.index
  }
}

// 要有Dispatch的能力
// 要有一个返回值 并且是一个对象
const mapStateToDispatch = (dispatch) => {
  return {
    setIndexDispatch(index) {
      dispatch(actionCreators.setIndex(index))
    }
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(memo(Bottom))
