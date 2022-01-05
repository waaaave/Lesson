import * as types from '../action-types'
// 1. 给组件状态 去连接connect 作为组件的方法， 提出改变状态的申请
// 2. 调用接口数据

export const setSideBar = (sideBar) => {
  return {
    type: types.SET_APP_SIDEBAR_COLLAPSED
  }
}