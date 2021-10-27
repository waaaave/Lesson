import React from 'react';

export default function topcis( topics = {
  loading:true,
  data:[]
}, action){
  switch(action.type){
    //分页->loading 销毁之前的数据
    case 'topics_loading':
      return{
        loading:true,
        data:[]
      }
    //dispatch action之后会重新计算
    //-->loading=false,data 有数据
    case 'topics_loadover' :
      return{
        loading:false,
        // 
        data:action.data
      }
    default:
      return topics;
  }
}