import React, { memo } from 'react'
import { LeftBottomStyle } from './style'

import Echarts from '@/components/echarts'

const LeftBottom = memo(() => {
  const option = {
    // backgroundColor: 'rbg(40,46,72)',
    grid: {
      left: '5%',
      right: '1%',
      top: '20%',
      bottom: '15%',
      containLabel: true // grid 区域是否包含坐标轴的刻度标签
    },
    legend: {
      right: 'center',
      bottom: '5%',
      itemGap: 20,
      itemWidth: 13,
      itemHeigth: 12,
      textStyle: {
        color: '#64BCFF'
      },
      icon: 'rect'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#20FF89'
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#64BCFF'
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          color: '#64BCFF'
        }
      }
    ],
    series: [
      {
        name: '正常',
        type: 'line',
        smooth: true,
        stack: '总量',
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: '#20FF89',
          lineStyle: {
            color: '#20FF89',
            width: 2
          }
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#20FF89'
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0)'
              }
            ]
          }
        },
        data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
      },
      {
        name: '异常',
        type: 'line',
        smooth: true,
        stack: '总量',
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: '#EA9502',
          lineStyle: {
            color: '#EA9502',
            width: 2
          }
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#EA9502'
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0)'
              }
            ]
          }
        },
        data: [20, 12, 11, 24, 90, 330, 10, 1, 154, 90, 330, 10]
      }
    ]
  }

  return (
    <LeftBottomStyle>
      <Echarts option={option}></Echarts>
    </LeftBottomStyle>
  )
})

export default LeftBottom
