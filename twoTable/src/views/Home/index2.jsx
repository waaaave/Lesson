/**
 * @view 首页，对应路由'/'
*/

import { useState, useEffect } from 'react'
import { Add, Submit } from '../../components'
import { Row, Col } from 'antd'
import axios from 'axios'
import { useRequest } from 'ahooks'
import 'antd/dist/antd.css'
import './index.css'

function Home() {
  // 存储左侧表格需要添加的数据，也是右侧表格需要渲染的数据
  const [addInfo, setAddInfo] = useState([])
  // 存储右侧表格需要清除的数据
  const [outInfo, setOutInfo] = useState([])
  // post请求体配置
  const [listQuery, setListQuery] = useState({
    title: "",
    synthesize: "",
    innovative: "",
    business: "",
    revenue: "",
    hard:""
  })

  // 请求方法
  const postTableList = (query) => {
    return new Promise((resolve, reject) => {
      axios.post('/table/list', query)
        .then(data => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // ahooks useRequest得到请求数据
  const { data, error, loading = false, run } = useRequest(() => postTableList(listQuery))
  // console.log(data1, '++++++++++');
  useEffect(() => {
    // 手动发起请求
    run()
  }, [listQuery])

  return (
    <div className="Home">
      <Row>
        <Col span={18}>
          <Add
            data={data}
            addInfo={addInfo}
            setAddInfo={setAddInfo}
            outInfo={outInfo}
            setOutInfo={setOutInfo}
          />
        </Col>
        <Col span={6}>
          <Submit
            addInfo={addInfo}
            setAddInfo={setAddInfo}
            outInfo={outInfo}
            setOutInfo={setOutInfo}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Home