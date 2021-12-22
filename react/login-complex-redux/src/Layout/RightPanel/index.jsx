import React, { useState } from 'react';
import './index.less'
import {Drawer, Row, Col, Switch} from 'antd';


const RightPanel = () => {

  const [settingPanelVisible, setSettingPanelVisible] = useState(true)

  const toggleSettingPanel =() => {
    setSettingPanelVisible(!settingPanelVisible)
  }

  return(
    <div className="rightSettings">
      <Drawer
        title='系统设置'
        placement='right'
        width={350}
        visible={settingPanelVisible}
        onClose={toggleSettingPanel}
      >
        <Row>
          <Col span={12}>
            <span>侧边栏LOGO</span>
          </Col>
          <Col span={12}>
            <Switch
              checkedChildren='ON'
              unCheckedChildren='OFF'
              defaultChecked={true}
            />
          </Col>
        </Row>
      </Drawer>
    </div>
  )
}

export default RightPanel