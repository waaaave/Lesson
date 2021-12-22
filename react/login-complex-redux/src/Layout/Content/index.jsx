import React from 'react';
import './index.less'
import {Layout} from 'antd';
import {useTitle} from 'ahooks'
// import DocumentTitle from 'react-document-title'


const { Content } = Layout

const LayoutContent = () => {

  useTitle('后台首页')

  return(
    // <DocumentTitle title='后台首页'>
      <Content style={{height:'calc(100% - 100px)'}}>111111111111</Content>
    // </DocumentTitle>
  )
}

export default LayoutContent