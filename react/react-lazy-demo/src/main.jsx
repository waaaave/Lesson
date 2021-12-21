import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Card from './card'
import{ Main } from './styled'

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <Card />
    </Main>
  </React.StrictMode>,
  document.getElementById('root')
)
