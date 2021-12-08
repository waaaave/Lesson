import React, { createContext, useState } from 'react'
import {dummyProducts} from '../service/dummy'
// 创建一个上下文环境
// 任何组价都只要调用useContext(ProductsContext)
// 商品数据流管理
export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

  const [products] = useState(dummyProducts)

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider;