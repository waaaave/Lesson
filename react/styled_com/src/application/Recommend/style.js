import styled from 'styled-components'
// css in js
// 样式组件 替代stylus css变量 等等 都可以做
// 作为样式组件可以js 传参给样式组件
// css 重名问题

export const Content = styled.div`
  position: fixed;
  top: 94px;
  left: 0;
  bottom: ${props => props.play >0? "60px" :0};
`