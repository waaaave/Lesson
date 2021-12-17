import { useState, useEffect }  from "react"
// 多端能力的UI 抽象层UI 
// @tarojs/components 定义了UI COMMON 
import { View, Swiper, Text, SwiperItem, Image } from "@tarojs/components"
import { AtIcon, AtTabBar } from 'taro-ui'
import classnames from 'classnames'
import CLoading from '../../components/CLoading'
import Taro from '@tarojs/taro'
import './index.scss'

const Index = () => {
  const [showLoading, setShowLoading] = useState(false)
  const [bannerList, setBannerList] = useState([])
  const [recommendPlayList, setRecommendPlayList] = useState([])
  const [current, setCurrent] = useState(0)


  useEffect(() => {
    Taro.request({
      url: 'http://localhost:3300/banner',
      success: function(res) {
        console.log(res)
        setBannerList(res.data.banners)
        setShowLoading(true)
      }
    })
    Taro.request({
      url: 'http://localhost:3300/personalized',
      success: function(res) {
        console.log(res)
        setRecommendPlayList(res.data.result)
      }
    })
  }, [])
  const goPage = (name) => {
    // console.log(name)
    // wx.
    // 端能力
    Taro.navigateTo({
      url: `/pages/${name}/index`
    })
  }
  const goDetail = (id, name) => {
    Taro.navigateTo({
      url: `/pages/playListDetail/index?id=${id}&name=${name}`
    })
  }
  return (
    <View className={classnames({
      index_container: true,
      hasMusicBox: true  
    })}>
      <CLoading fullPage={true} 
      hide={showLoading}/>
      <Swiper
        className="banner_list"
        indicatorColor="#999"
        indicatorActiveColor="#d43c33"
        circular
        indicatorDots
        autoplay
      >
        {
          bannerList.map(item => (
            <SwiperItem key={item.targetId} className="banner_list__item">
              <Image src={item.imageUrl} className="banner_list__item__img"/>
            </SwiperItem>
          ))
        }
      </Swiper>
      <View className="handle_list">
        <View className="handle_list__item"
         onClick={goPage.bind(null,'dailyRecommend')}>
          <View className="handle_list__item__icon-wrap">
            <AtIcon 
              prefixClass="fa"
              value="calendar-minus-o"
              size="25"
              className="handle_list_item__icon"

            ></AtIcon>
          </View>
          <Text className="handle_list__item__text">每日推荐</Text>
        </View>
      </View>
      <View className="recommend_playlist">
        <View className="recommend_playlist__title">推荐歌单</View>
        <View className="recommend_playlist__content">
          {
            recommendPlayList.map(item => (
              <View
                key={item.id}
                onClick={goDetail.bind(null, item.id, item.name)}
                className="recommend_playlist__item"
              >
                <Image 
                  src={`${item.picUrl}?imageView&thumbnail=250x0`}
                  className="recommend_playlist__item__cover"
                />
                <View className="recommend_playlist__item__cover__num">
                  <Text className="at-icon at-icon-sound"></Text>
                  {
                    item.playCount < 10000
                      ? item.playCount
                      : `${Number(item.playCount / 10000).toFixed(0)}万`
                  }
                </View>
                <View className="recommend_playlist__item__title">
                  {item.name}
                </View>
              </View>
            ))
          }
        </View>
      </View>
      <AtTabBar
        fixed
        selectedColor="#d43c33"
        tabList={[
          {title:'发现', iconPrefixClass:'fa', iconType:'feed'},
          {title:'我的', iconPrefixClass:'fa', iconType:'music'}
        ]}
        onClick={setCurrent}
        current={current}
      >

      </AtTabBar>
    </View>
  );
};

export default Index;
