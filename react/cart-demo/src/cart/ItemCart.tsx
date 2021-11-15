// List 某条数据的组件封装

import React from 'react'
// 
import { CartItem } from './'
// 子组件 propsCartItem

interface Props {
  item: CartItem
  checked: boolean
  onCheckedChange: onCheckedChange<CartItem>
}

// input checkbox
// memo 性能优化 减少组件的重新渲染 usememo
const ItemCard = React.memo((props:Props) =>{
  const {item, checked, onCheckedChange} = props
  const {price} = item
  return(
    <div className="item_card">
      <div className="checkbox-wrap">
        <input 
          type="checkbox"
          checked={checked}
          onChange={onCheckedChange}
        />
        <div className="item-info">
          {name} ${price}
        </div>
      </div>
    </div>
  )
})