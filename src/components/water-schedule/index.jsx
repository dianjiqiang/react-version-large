import React, { memo, useEffect, useRef } from 'react'
import { WaterScheduleStyle } from './style'

const WaterSchedule = memo((props) => {
  const countRef = useRef()
  const waterRef = useRef()

  const { percentage = 70 } = props

  useEffect(() => {
    startAnimate(percentage)
  }, [percentage])

  // 开始动画
  function startAnimate(percentage = 0) {
    let countEl = countRef.current
    let waterEl = waterRef.current
    let percent = 0 // 开始值
    let interval
    // 1.定时更新数据
    interval = setInterval(function () {
      countEl.innerHTML = percent
      if (percent <= 100) {
        // 2.超过100不能移动
        waterEl.style.transform = 'translate(0,' + (100 - percent) + '%)'
      }
      if (percent >= percentage) {
        countEl.innerHTML = percentage
        clearInterval(interval)
      }
      percent++
    }, 60)
  }

  return (
    <WaterScheduleStyle className="water-ball">
      <svg x="0px" y="0px" className="dn">
        <symbol id="wave">
          <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
          <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
          <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
          <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
        </symbol>
      </svg>
      {/* <!-- 水球 --> */}
      <div className="box">
        <div className="percent">
          <div className="percentNum" id="count" ref={countRef}>
            0
          </div>
          <div className="percentB">%</div>
        </div>
        {/*<!-- 这个元素往上移 -->*/}
        <div id="water" className="water" ref={waterRef}>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use href="#wave"></use>
          </svg>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use href="#wave"></use>
          </svg>
        </div>
      </div>
    </WaterScheduleStyle>
  )
})

export default WaterSchedule
