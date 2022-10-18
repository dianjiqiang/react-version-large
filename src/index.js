import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/reset.less'
import { BrowserRouter } from 'react-router-dom'

import * as echarts from 'echarts'
window.echarts = echarts

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
)
