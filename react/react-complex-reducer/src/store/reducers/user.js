// 页面需要什么状态？ 用户信息显示， token 
import * as types from '../action-types'

const initUserInfo = {
  name: "",
  role: "",
  avatar: "",
  token: ""
}

export default function user(state = initUserInfo, action) {
  const { payload } = action
  switch (action.type) {
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        name: payload.name,
        role: payload.role,
        avatar: payload.avatar
      }

    default:
      return state
  }
}