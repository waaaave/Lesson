import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import DefaultRoutes from './routes'
import ProductsContextProvider from './contexts/ProductsContext'

// store 管理
// 只要使用useontext就能拿到外层组件的数据
// ProductsContextProvider value
ReactDOM.render(
  <ProductsContextProvider>
    {/* <CartContextProvider> */}
      <DefaultRoutes />
    {/* </CartContextProvider> */}
  </ProductsContextProvider>,
  document.getElementById('root')
)
