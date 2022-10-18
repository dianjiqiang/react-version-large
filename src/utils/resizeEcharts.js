export function resizeEcharts(myChart) {
  return () => {
    myChart.resize()
  }
}
