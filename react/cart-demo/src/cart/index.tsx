import React from 'react'
import { List, Typography } from 'antd'
import { useChecked } from './use-checked'
import './index.css'


export type CartItems = CartItem[]

export interface CartItem {
  id: number
  name: string
  price: number
}

const cartData = Array(5)
  .fill(undefined)
  .map((v, i) => ({
    id: i,
    name: `商品${i}`,
    price: Math.round(Math.random() * 100)
  }))



export default function Cart() {

  const{
    checkedAll
  } = useChecked(cartData) //自定义hooks 函数
  
  // react @types/react  event 事件interface
  const onWrapCheckedAllChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkAll = e.target.checked
  }
  const Footer = (
    <div className="footer">
      <div className="check-all">
        <input 
          type="checkbox"
          checked={checkedAll} 
          onChange={onWrapCheckedAllChang} 
          />全选
      </div>
    </div>
  )
  return (
    <div className="cart">
      <List 
        header={<div>购物车</div>}
        footer={Footer}
      />
    </div>
  )
}
