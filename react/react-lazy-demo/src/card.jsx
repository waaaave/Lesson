import React, { useState } from 'react';
import styled from 'styled-components';
import useCustomFetch from './useCustomFetch'

const CardDiv = styled.div`
  width: 350px;
  height: 400px;
  background-color: #e3e3e3;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .info {
    padding: 10px;
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }

`

const initalState = {
  imgUrl: '',
  title: '',
  desc: ''
}

//对数据请求的封装，封装成为promise 
function fetcher() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        imgUrl: "https://source.unsplash.com/random/350x200",
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
      })
    },2000)
  })
}


// data 数据是异步的 所以会挂载推迟
// react 有一种能力可以延迟加载 而且在加载过程中很方便的加载占位符
function Card() {
  const [data, setData] = useState(initalState)
  // 模拟异步
  const res = useCustomFetch(fetcher)

  return (
    <CardDiv>
      <img src={data.imgUrl} alt="" />
      <div className="info">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </CardDiv>
  )
}
export default Card