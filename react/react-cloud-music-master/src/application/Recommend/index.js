import React, { useEffect } from 'react';
// store 连接到当前组件
import {connect} from 'react-redux'
import * as actionTypes from './store/actionCreators'
// 变成 connect 的一个子组件
function RecommendList (props) {
  console.log(props);
  // 把 store中的数据引入 useSelector
  //生命周期时调用action bannerList 进行修改
  let {getBannerDataDispatch,getRecommendListDispatch} = props
  useEffect(()=>{
    getBannerDataDispatch();
    getRecommendListDispatch();
  },[])
  return(
    <>
      RecommendList
    </>
  )
}
// 高阶组件
const mapStateToProps = (state) =>({
  bannerList: state.getIn(['recommend','bannerList']),
  recommendList: state.getIn(['recommend','recommendList'])
})
const mapDispatcToProps = (dispatch) =>{
  return {
    getBannerDataDispatch(){
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDispatch(){
      dispatch(actionTypes.getRecommendList());

    }
  }
}
// connect 高阶组件 RecommentList 原组件 作为参数传给 connect，返回值依旧是组件
export default connect(mapStateToProps,mapDispatcToProps)(RecommendList);