import React, { useEffect } from 'react'
import Taro, { getCurrentInstance} from '@tarojs/taro'
import './index.scss'

const PlayListDetail = () => {

  useEffect(() => {
    let {id, name} = getCurrentInstance().router.params
    // console.log(id, name);
    Taro.setNavigationBarTitle({
      title: name
    })
  }, [])

  return(
    <>
      PlayListDetail
    </>
  )
} 

export default PlayListDetail