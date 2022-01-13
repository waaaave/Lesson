import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators'
import { useLocation } from 'react-router-dom';
import HeaderComponent from '@/common/headerComponent/HeaderComponent'

const Detail = (props) => {
  console.log('detail')
  const { data } = props
  const { getDetailDataDispatch } = props
  
  let {pathname} = useLocation()
  let id = pathname.replace('//','')||undefined
  console.log(data,'-------------------------');

  useEffect(()=>{
    if (id) {
      getDetailDataDispatch(id)
    }
  },[])

  const handleShare = () => {
    // to be continue share
  }

  return (
    <>
      <HeaderComponent title={data.title} handleShare={handleShare} />
    </>
  )
}

const mapStateToPorps = (state) => {
  return {
    data: state.detail.detailData
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    getDetailDataDispatch() {
      dispatch(actionTypes.getDetailData())
    }
  }
}

export default connect(mapStateToPorps, mapStateToDispatch)(memo(Detail))