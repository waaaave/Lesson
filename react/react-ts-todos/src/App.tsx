import { useEffect, useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {Spin,Tabs} from 'antd'
import TodoInput from './todo-input'

const{TabPane} = Tabs
// 代码风格 定义常量 todos 的类别的时候 filter
// action type 代码的可读性
const TAB_ALL = "all";
const TAB_FINISHED = "finished";
const TAB_UNFINISHED = "unfinished";

const tabMap = {
  [TAB_ALL]: "全部",
  [TAB_FINISHED]: "已完成",
  [TAB_UNFINISHED]: "待完成"
}

function App() {
  const [activeTab, setActiveTab] = useState(TAB_ALL)
  const [placeholder,setPlaceholder] = useState("")
  // 组建通信
  const setQuery = () =>{

  }
  useEffect(() => {
    // componentDidMount
    // 立即执行一次
    // shouldComponentUpdate
    // activeTab 修改了后， 执行 
    // willComponentUnMount
    // return () => { 取消定时器   }
  }, [activeTab])

  return (
   <>
   {/* 容器化组件 */}
    <Tabs activeKey={activeTab} onChange={setActiveTab} >
      <TabPane tab={tabMap[TAB_ALL]} key={TAB_ALL}></TabPane>
      <TabPane tab={tabMap[TAB_FINISHED]} key={TAB_FINISHED}></TabPane>
      <TabPane tab={tabMap[TAB_UNFINISHED]} key={TAB_UNFINISHED}></TabPane>
    </Tabs>
    <div className="app-wrap">
        <h1 className="app-title">Todo List</h1>
        {/* 搜索   取数据 */}
        <TodoInput placeholder={ placeholder }
         onSetQuery={ setQuery }/>
      </div>
   </>
  )
}

export default App
