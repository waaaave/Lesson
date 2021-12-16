import React from 'react'
import {Table, Button } from 'antd'
const {Column} = Table
import './SelectCompanyList.css'

export const SelectCompanyList = (props) => {
  const {data} = props
  const deleteClick = () => {

  }
  return (
    <>
      <Table
          
          dataSource={data}
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
    </>
  )
}
