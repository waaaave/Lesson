import React, { memo } from 'react'
import classnames from 'classnames'
import { View } from '@tarojs/components'
import './index.scss'

const CLoading =({ fullPage, hide }) => {

  const cls = classnames({
    loading_components: true,
    fullScreen: fullPage,
    hide: hide
  })

  return <View className={cls}></View>
}

export default memo(CLoading, (oldProps, newProps) => {
  return(
    oldProps.fullPage === newProps.fullPage 
    && oldProps.hide === newProps.hide
  )
})