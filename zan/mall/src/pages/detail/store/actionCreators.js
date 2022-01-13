import * as actionType from './constants'
import { reqdetail } from '../../../api'

export const changeDetailData = (data) => {
  return {
    type: actionType.CHANGE_DETAIL_DATA,
    data
  }
}

export const getDetailData = (id) => {
  return (dispatch) => {
    reqdetail(id)
      .then(data => {
        dispatch({
          type: actionType.CHANGE_DETAIL_DATA,
          data: data.data.data
        })

      })
  }
}