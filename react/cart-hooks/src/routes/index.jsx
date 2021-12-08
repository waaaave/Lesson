import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Store from '../pages/store'
import About from '../pages/About'
import Cart from '../pages/cart'
import NotFound from '../pages/NotFound'


const DefaultRoutes = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route exact path='/' element={<Store/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default DefaultRoutes