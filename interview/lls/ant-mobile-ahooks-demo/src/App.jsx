import React,{ useState } from 'react'
// 虚拟列表 
import { InfiniteScroll, List } from 'antd-mobile'
import {mockRequest} from './mock-request'


const App = () => {

  const [data, setData] = useState([])
  const [hasMore, setHasMore] = useState(true)

  async function loadMore() {
    const append = await mockRequest();
    console.log(append) 
    setData(val => [...val, ...append])
    setHasMore(append.length > 0) // 请求的数组为空时返回false
  }

  return(
    <div>
      <List>
        {
          data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))
        }
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}/>
    </div>
  )
}

export default App