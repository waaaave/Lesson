import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'

const Home = () => {
  return (
    <>
      Home
    </>
  )
}

const Backend = () => {
  return (
    <>
      Backend
    </>
  )
}

const Frontend = () => {
  return (
    <>
      Frontend
    </>
  )
}

const menus = [
  { title: '首页', path: '/', children: [] },
  {
    title: '后端', path: '/backend', children: [
      { title: '全部', path: '' },
      { title: 'python', path: '/python' },
      { title: 'java', path: '/java' }

    ]
  },
  { title: '前端', path: '/frontend', children: [] }

]

function App() {
  const [subMenus, setSubbMenus] = useState([])
  // useEffect(()=> {
  //   let location = useLocation()
  //   const arr = menus.find(item => {
  //     return item.path == location.pathname
  //   }).children
  //     arr.length&&setSubbMenus(arr)
  // },[])

  return (

    <div className="App">
      <nav>
        {
          menus.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
            >
              {item.title}
            </NavLink>
          ))
        }
      </nav>
      <div>
        {
          menus.find(item => {
            item.path == location.pathname
          }).children.map((item, index) => {
            <NavLink to={`/bckend/${item.path}`} key={index}></NavLink>
          })
        }
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route path='/backend' element={<Backend />} >
          {
            menus[1].children.map((item, index) => {
              <Route path={`/bckend/${item.path}`}></Route>
            })
          }
        </Route>
        <Route path='/frontend' element={<Frontend />} ></Route>
      </Routes>

    </div>
  )
}

export default App
