import React,{useEffect} from 'react';
import TopicsList from './pages/TopicsList'
import { useSelector } from 'react-redux'
import { useTopicList } from './store/action';
import './App.css';

function App() {
  //data loading 由中央提供 
  // 三种做法 1. 组件内部的 useState+useEffect 2.useContext 用来代替redux 3. redux
  //redux 目前任然是业界主流
  // provider topcis reducer函数

  let { data,loading } = useSelector((state)=> state.topics)
  console.log(data,loading);
  let getData = useTopicList();
  useEffect(()=>{
    getData('All',1)
    console.log(data,loading);
  },[])
  return (
    <div>
      {/* 文章列表 -> data */}
      <TopicsList data={data} loading={loading} />
      {/* <Pagenation /> */}
    </div>
  );
}

export default App;
