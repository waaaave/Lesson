import React from 'react'
import { booklist } from '../api'
import { Row, Card, Tooltip } from 'antd'
import Layout from '../../components/layout'
const { Meta } = Card

const Books = (props) => {
  console.log(props, '??????????????????????')
  return (
    <Layout>
      <Row className="ww clearfix book-c">
        {
          props?.res.map((item, index) => {
            return (
              <a href={item.url} className="book-a" key={index}>
                <Card
                  hoverable
                  style={{ width: 175 }}
                  cover={<img alt="图书图片" src={item.img} />}
                >
                  <Meta title={
                    <Tooltip placement="topLeft"
                      title={`《${item.name}》`}>
                      <span>{item.name}</span>
                    </Tooltip>
                  } />

                </Card>
              </a>
            )
          })
        }
      </Row>
    </Layout>
  )
}
// 1. 在服务器端取 select  * 
// 2. 拿到结果后， 服务器端完成 ssr 编译 
// 掘金的SEO 不咋的
// SEO 搜索引擎优化   PC端流量入口 baidu 
//     1. html 语义化 
//     2. head  
//         title    
//         meta description 
//         meta keywords 


// next.js 异步取数据的API
Books.getInitialProps = async () => {
  // 取数据的地方
  let res = await booklist()
  console.log(res)
  return {
    res
  }
}

export default Books
