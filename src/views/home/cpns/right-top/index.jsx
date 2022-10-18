import React, { memo } from 'react'
import { RightTopStyle } from './style'

import WaterSchedule from '@/components/water-schedule'

const RightTop = memo(() => {
  const panelItems = [
    { id: 1, name: '深圳', percentage: '30%' },
    { id: 2, name: '广州', percentage: '20%' },
    { id: 3, name: '东莞', percentage: '10%' },
    { id: 4, name: '佛山', percentage: '10%' },
    { id: 5, name: '其它', percentage: '30%' }
  ]

  return (
    <RightTopStyle>
      <div className="right-top-panel">
        <div className="right-water-ball">
          <WaterSchedule></WaterSchedule>
        </div>
        <div className="legend">
          {panelItems.map((item) => (
            <div className="leg-name" key={item.id}>
              <span className={`dot area${item.id}`}></span>
              <span className="name">{item.name}</span>
              <span className="percentage">{item.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </RightTopStyle>
  )
})

export default RightTop
