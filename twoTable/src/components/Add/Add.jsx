/**
 * @component 左侧数据表格
*/

import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import 'antd/dist/antd.css'
import './Add.css'

const { Column }  = Table

export const Add = (props) => {
  // console.log(props, '========')
  const { data, loading, addInfo, setAddInfo, outInfo, setOutInfo } = props
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  // 勾选功能
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
    }
  }

  // 单行数据添加事件
  const addClick = (record) => {
    // console.log(record);
    setSelectedRowKeys(selectedRowKeys => [...selectedRowKeys, record.id])
    const btn = document.getElementById(`btn-${record.id}`)
    btn.setAttribute("disabled", true)
    btn.innerHTML = "已添加"
    setAddInfo(info => [...info, {
      id: record.id,
      title: record.title
    }])
  }

  // 批量添加
  const batchAdd = () => {
    const newData = []
    selectedRowKeys.forEach(item => {
      const btn = document.getElementById(`btn-${item}`)
      btn.setAttribute('disabled', true)
      btn.innerHTML = "已添加"
      newData.push(data.data.data.items.filter(newItem => newItem.id === item)[0])
      setAddInfo([...newData])
    })
  }

  // useEffect(() => {
  //   console.log(addInfo, 'aaaaaaaaaaa');
  // }, [addInfo])

  useEffect(() => {
    // console.log(outInfo, '************');
    for (const infoItem of outInfo) {
      const btn = document.getElementById(`btn-${infoItem.id}`)
      // console.log(btn, '==========');
      btn.disabled = false
      btn.innerHTML = "添加"
      setSelectedRowKeys(selectedRowKeys => selectedRowKeys.filter(key => key !== infoItem.id))
      setOutInfo(outInfo => [])
    }
  }, [outInfo])

  return (
    <div className="add-container">
      {data && data.data.data.total > 0 && (
        <div className="table-container">
          <Button
            type="primary"
            disabled={!selectedRowKeys.length}
            onClick={batchAdd}>批量添加</Button>
          <Table
             className="add-table"
             rowSelection={rowSelection} 
             border
             rowKey={record => record.id}
             dataSource={data.data.data.items}
             loading={loading}
          >
            <Column
              title="企业名称"
              dataIndex="title"
              key="id"
              width={200}
              align="left"
            />
            <Column
              title="综合指数"
              dataIndex="synthesize"
              key="id"
              width={200}
              align="left"
            />
            <Column
              title="创新指数"
              dataIndex="innovative"
              key="id"
              width={200}
              align="left"
            />
            <Column
              title="营业收入(万元)"
              dataIndex="business"
              key="id"
              width={200}
              align="left"
            />
            <Column
              title="税收(万元)"
              dataIndex="revenue"
              key="id"
              width={200}
              align="left"
            />
            <Column
              title="固投(万元)"
              dataIndex="hard"
              key="id"
              width={200}
              align="left"
              sorter={(a, b) => a.hard - b.hard}
            />
            <Column
              title="操作"
              key="id"
              width={200}
              align="left"
              render={(text, record, index) => (
                <Button
                  id={`btn-${record.id}`}
                  className="add-button"
                  onClick={() => addClick(record)}
                >添加</Button>
              )}
            />
          </Table>
        </div>
      )}
    </div>
  )
}