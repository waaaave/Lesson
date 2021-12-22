import React from 'react'
// 布局 创建子路由
import { Layout } from 'antd'
import Sider from './Sider'
import  Header from './Header'
import Content from './Content'
import RightPanel from './RightPanel'

const Index = () => {
  return(
    <Layout
      style={{minHeight:'100vh'}}
    >
      <Sider/>
      <Layout>
        <Header/>
        <Content/>
        <RightPanel/>
      </Layout>
    </Layout>
  )
}

export default Index