import React, { useEffect, useState } from 'react'
// 多端能力的UI 抽象层UI
// @tarojs/components 中间层 定义所有基础UI
import { View, Swiper, SwiperItem, Image } from "@tarojs/components"
// 根据逻辑动态生成类名
import classnames from 'classnames'
import CLoading from '../../components/CLoading'
import Taro from '@tarojs/taro'

import './index.scss'

const Index = () => {
  
  const [showLoading, setShowLoading] = useState(false)
  const [bannerList, setBannerList] = useState([])

  useEffect(() => {
    Taro.request({
      url: 'http://localhost:3300/banner',
      success: function(res){
        // console.log(res);
        setBannerList(res.data.banners)
      }
    })
  }, [])

  return (
    <View className={
      classnames({
        index_container:true,
        hasMusicBox: true
      })}>
      <CLoading fullPage={true} hide={showLoading} />
      <Swiper
        className='banner_list'
        indicatorColor='#999'
        indicatorActiveColor='#d43c33'
        circular
        indicatorDots
        autoplay
      >
        {
          bannerList.map(item => (
            <SwiperItem key={item.targetId} className='banner_list__item'>
              <Image src={item.imageUrl} className='banner_list__item__img' />
            </SwiperItem>
          ))
        }
      </Swiper>
    </View>
  );
};

export default Index;
