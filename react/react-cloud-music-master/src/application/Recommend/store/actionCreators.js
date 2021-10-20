import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

// export const changeBannerList = (data) => ({
//   type: actionTypes.CHANGE_BANNER,
//   data: fromJS(data)
// });
export const changeBannerList =(data)=>({
  type:actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})
export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
});

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data
});

export const getBannerList = () => {
  return (dispatch) => {
    //action->api 请求接口 -> backend
    getBannerRequest().then(data=>{
      // console.log(data,'-------');
      //叫reducer重新计算
      const action = changeBannerList(data.banners);
      dispatch(action);//reducer重新运行
    })
    // getBannerRequest().then(data => {
    //   const action = changeBannerList(data.banners);
    //   dispatch(action);
    // }).catch(() => {
    //   console.log("轮播图数据传输错误");
    // }) 
  }
};

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      dispatch(changeRecommendList(data.result));
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log("推荐歌单数据传输错误");
    });
  }
};