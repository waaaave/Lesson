import * as actionTypes from './constants'

const defaultState = {
  detailData: {}
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.CHANGE_DETAIL_DATA:
      return{
        ...state,
        detailData: action.data
      }
      default:
        return state
  }
}

export default reducer