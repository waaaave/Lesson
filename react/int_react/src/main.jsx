import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// 整站使用
import { TransProvider } from './lang';
// import { TransProvider } from 'use-i18n';
import i18n from './i18n' // 语言包

ReactDOM.render(
  <TransProvider i18n={i18n}>
    <App />
  </TransProvider>,
  document.getElementById('root')
)
