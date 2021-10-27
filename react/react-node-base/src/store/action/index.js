//交给页面去作为方法调用
// useState+useEffect

import { useDispatch } from "react-redux"

// useEffect -> store -> action ->dispatch -> reducer 重新计算 -> 更新
// 高阶函数就是一个action 
const http = axios.create({
  baseURL:"https://codejs.org/api/v1"
})
function useTopicList() {
  // 在一个有异步的请求的action中要写成一个高阶函数
  let dispatch = useDispatch()
  return function (tab = "all", page = 1, limit = 20, mdrender = true) {
    //让组件进入loading状态 细腻
    dispatch({
      type: 'topics_loading'
    })
    http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`)
      .then(res => {
        dispatch({
          type: "topics_loadover",
          data: res.data.data
        })
      })
  }
}
export {useTopicList};