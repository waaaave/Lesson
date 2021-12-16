import React, { useState, useEffect } from 'react'
import './CompanyDataList.css'
import { Table, Button } from 'antd'
const { Column } = Table
export const CompanyDataList = (props) => {
  const { onSelectChange } = props
  const [selectedRowKeys, 
      setSelectedRowKeys] = useState([])
  const {data} = props
  const addClick = (id) => {
    setSelectedRowKeys([
      ...selectedRowKeys,
      id
    ])
    
    // 
  }
  useEffect(() => {
    onSelectChange(selectedRowKeys)
  }, [selectedRowKeys])

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      console.log(selectedRowKeys, '-------')
      setSelectedRowKeys(selectedRowKeys)
      
    }
  }
  return (
    <div className="add-container">
      <div className="table-container">
      <Table
        className="add-table"
        border
        rowSelection={rowSelection}
        rowKey={record => record.id}
        dataSource={data}
      >
        <Column
          title="企业名称"
          dataIndex="title"
          key="title"
          width={200}
          align="left"
        />
        <Column
          title="综合指数"
          dataIndex="synthesize"
          key="synthesize"
          width={200}
          align="left"
        />
        <Column
          title="创新指数"
          dataIndex="innovative"
          key="innovative"
          width={200}
          align="left"
        />
        <Column
          title="营业收入(万元)"
          dataIndex="business"
          key="business"
          width={200}
          align="left"
        />
        <Column
          title="税收(万元)"
          dataIndex="revenue"
          key="revenue"
          width={200}
          align="left"
        />
        <Column
          title="固投(万元)"
          dataIndex="hard"
          key="hard"
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
            <>
              {record.isAdded?'已经添加':<Button
                className="add-button"
                onClick={() => addClick(record.id)}
              >添加</Button>}
            </>
          )}
        />
      </Table>
      </div>
    </div>
  )
}