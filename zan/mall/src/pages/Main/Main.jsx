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

const Main = (props) => {
    // 状态
    const { maindata } = props
    const [showPopup, setShowPopup] = useState(false)
    const [diaplay, setDisplay] = useState(false)
    // action
    const history = useHistory()
    const { getMainDataDispatch } = props
    const { classify=[],  rotationImg=[], menuBarData = {} } = maindata

    console.log(maindata)
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch()
        }
    }, [])

    const handleOnclick = () => {
        // popup 组件显示与否
        // console.log(showPopup,'2222222222222222222222');
        setShowPopup(!showPopup)
    }
    // 上拉加载更多
    const handlePullUp = () => {
        console.log('上拉加载更多');
    }
    // 下拉刷新
    const handlePullDown = () => {
        console.log('下拉刷新');
    }
    
    return (
        <div className="main">
            <SearchInput handleOnclick={() => {handleOnclick()}} 
                searchBoxHandleOnclick={() => history.push('/search')} />
            <MainPopup handleOnclick={handleOnclick} display={showPopup} />
            
            
            <Scroll
                direction={"vertical"}
                refresh={false}
                onScroll={
                    (e)=>{
                        // console.log(e);
                        // console.log(e.y);
                        if (e.y < -1142) {
                            setDisplay(true)
                        }else {
                            setDisplay(false)
                        }
                    }
                }
                    pullUp={handlePullUp}
                    pullDown={handlePullDown} >
                <div className="main-padding">
                    <Classify classify={classify}/>
                    <RotationChart rotationImg={rotationImg}/>
                    <MenuBar menuBarData={menuBarData}/>
                    <ImgList />
                    <HomeService />
                    <FramLayout />
                </div>
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
