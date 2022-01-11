import React, { useEffect, useState } from 'react'
import Scroll from '../../baseUI/scroll'
import './Main.css'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Classify from '../../components/main/classify/Classify'
import RotationChart from '../../components/main/rotationChart/RotationChart'
import MenuBar from '../../components/main/menuBar/MenuBar'
import ImgList from '../../components/main/imaList/ImgList'
import { useHistory } from 'react-router-dom'
import SearchInput from '../../components/searchInput/SearchInput'
import MainPopup from '../../components/mainPopup/MainPopup'
import HomeService from '../../components/homeService/HomeService'
import FramLayout from '../../components/framLayout/FramLayout'
import ListData from '../../components/main/listData/ListData.jsx'
import  MainBottomChooseCopy  from '@/components/main/mainBottomChooseCopy/MainBottomChooseCopy.jsx'
import * as api from '../../api'
import { forceCheck } from 'react-lazyload'

const Main = (props) => {
  // 状态
  const [list, setList] = useState([])
  const { maindata } = props
  const [ menuDisplay, setMenuDisplay ] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [diaplay, setDisplay] = useState(false)
  // action
  const history = useHistory()
  const { getMainDataDispatch } = props
  const { classify = [], rotationImg = [], menuBarData = {} } = maindata
  let [page, setPage] = useState(1)


  const fetchList = () => {
    api
      .reqlist(page)
      .then(res => {
        // console.log(res.data.data.list);
        setList([
          ...list,
          ...res.data.data.list])
      })
  }

  // console.log(maindata)
  useEffect(() => {
    if (!maindata.length) {
      getMainDataDispatch()
    }
    fetchList()
    
  }, [])

  useEffect(() => {
    // 不用redux redux 跨组件传值时使用
    // api
    fetchList()
    
  }, [page])

  const handleOnclick = () => {
    // popup 组件显示与否
    // console.log(showPopup,'2222222222222222222222');
    setShowPopup(!showPopup)
  }
  // 上拉加载更多
  const handlePullUp = () => {
    console.log('上拉加载更多');
    setPage(++page)
  }
  // 下拉刷新
  const handlePullDown = () => {
    console.log('下拉刷新');
  }

  return (
    <div className="main">
      <SearchInput handleOnclick={() => { handleOnclick() }}
        searchBoxHandleOnclick={() => history.push('/search')} />

      <Scroll
        direction={"vertical"}
        refresh={false}
        onScroll={
          (e) => {
            // console.log(e);
            // console.log(e.y);
            if (e.y < -1142) {
              setMenuDisplay(1)
            } else {
              setMenuDisplay(0)
            }
          forceCheck()
          }
        }
        pullUp={handlePullUp}
        pullDown={handlePullDown} >
        <div className="main-padding">
          <Classify classify={classify} />
          <RotationChart rotationImg={rotationImg} />
          <MenuBar menuBarData={menuBarData} />
          <ImgList />
          <HomeService />
          <FramLayout />
          <ListData list={list} />
        </div>
        <MainBottomChooseCopy display={menuDisplay} />

        <MainPopup handleOnclick={handleOnclick} display={showPopup} />
        
      </Scroll>
    </div>
  )
}
const mapStateToPorps = (state) => {
  return {
    maindata: state.main.maindata
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    getMainDataDispatch() {
      dispatch(actionTypes.getMainData())
    }
  }
}

export default connect(mapStateToPorps, mapStateToDispatch)(Main)
