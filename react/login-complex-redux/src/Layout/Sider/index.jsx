import React from 'react'
import { Layout } from 'antd'
import Menu from './Menu'

const { Sider } = Layout

const LayoutSider = () => {
  return (
    <Sider
      collapsible
      style={{ zIndex: '10' }}
    >
      <Menu />
    </Sider>
  )

}

export default LayoutSider