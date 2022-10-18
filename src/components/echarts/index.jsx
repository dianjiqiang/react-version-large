import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { EchartsStyle } from './style'

const Echarts = memo((props) => {
  const { width = '100%', height = '100%', option } = props

  const chartsDiv = useRef()

  useEffect(() => {
    const myChart = window.echarts.init(chartsDiv.current, null, 'svg')
    option && myChart.setOption(option)
  }, [option])
  return <EchartsStyle width={width} height={height} ref={chartsDiv}></EchartsStyle>
})

Echarts.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  option: PropTypes.object
}

export default Echarts
