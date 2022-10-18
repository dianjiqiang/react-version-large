import React, { memo, Fragment, useEffect, useState } from 'react'
import { CountUp } from 'countup.js'
import { CenterBottomStyle } from './style'

const CenterBottom = memo(() => {
  const [panelItems] = useState([
    { id: 1, isUp: true, percentage: 79.5, title: '充电桩总数(个)', totalNum: 8579.9, unit: '万' },
    { id: 2, isUp: true, percentage: 88.9, title: '年增长总数(个)', totalNum: 2856.6, unit: '万' },
    { id: 3, isUp: false, percentage: 62, title: '月增长总数(个)', totalNum: 1189.3, unit: '万' }
  ])
  function startNumberAnimation(panelItems) {
    const options = {
      decimalPlaces: 1, // 小数点位数
      duration: 2.5, // 持续时长
      useGrouping: true // 3个数字分成一组，example: 1,000 vs 1000 (true)
    }
    const perOptions = {
      decimalPlaces: 1,
      duration: 3,
      useGrouping: false, // 分组
      suffix: '%' // 添加后缀
    }
    panelItems.forEach((item, index) => {
      // 数据滚动：CountUp（id选择器或元素对象，数字，配置）{  }
      new CountUp(`total-num-${item.id}`, item.totalNum, options).start()
      // 百分比滚动
      new CountUp(`percentage-num-${item.id}`, item.percentage, perOptions).start()
    })
  }
  useEffect(() => {
    startNumberAnimation(panelItems)
  }, [panelItems])
  return (
    <CenterBottomStyle>
      <div className="bottom-content">
        {panelItems.map((item, index) => (
          <Fragment key={index}>
            <div className={`item panel${item.id}`}>
              <div className="pan-left">
                <div className="title">{item.title}</div>
                <span id={`total-num-${item.id}`} className="number">
                  {item.totalNum}
                </span>
                <span className="unit">{item.unit}</span>
              </div>
              <div className="pan-right">
                <span className={`triangle ${item.isUp ? 'up-triangle' : 'down-triangle'}`}></span>
                <span id={`percentage-num-${item.id}`} className="percentage">
                  {item.percentage}
                </span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </CenterBottomStyle>
  )
})

export default CenterBottom
