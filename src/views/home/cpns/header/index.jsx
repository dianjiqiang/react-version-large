import React, { memo } from 'react'
import { HeaderStyle } from './style'

const Header = memo((props) => {
  return (
    <HeaderStyle>
      <h1 className="title">新能源充电桩数据可视化平台</h1>
    </HeaderStyle>
  )
})

export default Header
