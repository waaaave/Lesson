import React, {useState, useEffect} from 'react'
import { Row, Col } from 'antd'
import  {CompanyDataList} from '../../components'
import  {SelectCompanyList} from '../../components'
import axios from 'axios'

const Home = () => {
  // 分页所有公司列表数据
  const [allCompanyList, setAllCompanyList] = useState([])
  // 已经添加的公司数据 
  const [selecedKeys, setSelectedKeys] = useState([])
  const [selectedCompanyList, setSelectedCompanyList] = useState([])

  useEffect(() => {
    // console.log('change selected ')
    setSelectedCompanyList(
      allCompanyList.filter(
        (item) => selecedKeys.includes(item.id)
      )
    )

      setAllCompanyList(
        allCompanyList.map(item => {
          if (selecedKeys.includes(item.id)) {
            return {
              ...item,
              isAdded: true
            }
          } else {
            return item
          }
      })
    )
  }, [selecedKeys])

  useEffect(() => {
    axios.post('/table/list')
      .then(data => {
        setAllCompanyList(data.data.data.items)

        // console.log(data.data.data.items)
      })
  }, [])
  
  const onSelectChange = (keys) => {
    // console.log(keys, '-----')
    setSelectedKeys(keys)
  }

  return(
    <div className="Home">
      {/* 布局 */}
      <Row>
        <Col span={18}>
          <CompanyDataList 
            data={allCompanyList}
            onSelectChange={onSelectChange}/>
        </Col>
        <Col span={6}>
          <SelectCompanyList data={selectedCompanyList}/>
        </Col>
      </Row>
    </div>
  )
}

export default Home