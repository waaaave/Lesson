import * as React from 'react';
import { Color } from '../model/color'; // model 模型层

// 每个组件都需要定制自己的参数类型约束 所以没有共享的必要
interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void
}

export const ColorPicker: React.FC<Props> = (props) => {

  const { color, onColorUpdated } = props

  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={color.red}
        onChange={event =>
          onColorUpdated(
            {
              ...color,
              red: +event.target.value
            }
          )
        }
      />

      {color.red}
      <br />
      <input
        type="range"
        min="0"
        max="255"
        value={color.green}
        onChange={event =>
          onColorUpdated(
            {
              ...color,
              green: +event.target.value
            })
        }
      />
      {color.green}
      <br />
      <input
        type="range"
        min="0"
        max="255"
        value={color.blue}
        onChange={event =>
          onColorUpdated(
            {
              ...color,
              blue: +event.target.value
            })
        }
      />
      {color.blue}
    </div>
  )
}