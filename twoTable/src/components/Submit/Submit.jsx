/**
 * @component 右侧提交表格
*/

import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Table, Button, Form } from 'antd'
import 'antd/dist/antd.css'
import './Submit.css'

const { Column } = Table

export const Submit = (props) => {
  const { addInfo, setAddInfo } = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  // const [outInfo, setOutInfo] = useState([])
  const { outInfo, setOutInfo } = props
  
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
    }
  }

  // 清空
  const deleteAll = () => {
    for (const infoItem of addInfo) {
      setOutInfo(outInfo => [...outInfo, {
        id: infoItem.id,
        title: infoItem.title
      }])
    }
    setAddInfo([])
  }

 
  // 批量移除
  const batchDelete = () => {
    selectedRowKeys.forEach(key => {
      for (const info of addInfo) {
        setAddInfo(addInfo => addInfo.filter(info => info.id !== key))
        if (info.id === key) {
          setOutInfo(outInfo => [...outInfo, info])
        }
      }
    })
    setSelectedRowKeys([])
  }

  // 单条数据移除
  const deleteClick = (record) => {
    // console.log(record, '==========');
    setAddInfo(addInfo => addInfo.filter(item => item.id !== record.id))
    setOutInfo(outInfo => [...outInfo, record])
  }
  
  return (
    <div className="submit-container">
      <Form className="submit-form">
        <div className="btn-container">
          <Button
            type="primary"
            disabled={!selectedRowKeys.length}
            onClick={batchDelete}
          >批量移除</Button>
          <Button
            type="primary"
            disabled={!addInfo.length}
            onClick={deleteAll}
          >清空</Button>
          <Button
            className="btn-submit"
            type="primary"
            disabled={!addInfo.length}
            href="/detail"
          >提交</Button>
        </div>
        <Table
          rowSelection={rowSelection} 
          dataSource={addInfo}
          rowKey={record => record.id}
        >
          <Column
            title="企业名称"
            dataIndex="title"
            key="id"
            width={200}
          />
          <Column
            width={200}
            align="center"
            render={(text, record, index) => (
              <Button
                onClick={() => deleteClick(record)}
              >×</Button>
            )}
          />
        </Table>
      </Form>
    </div>
  )
}