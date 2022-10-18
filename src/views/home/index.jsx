import React, { memo } from 'react'
import { HomeStyle } from './style'

import Header from './cpns/header'
import LeftTop from './cpns/left-top'
import LeftBottom from './cpns/left-bottom'
import CenterTop from './cpns/center-top'
import CenterBottom from './cpns/center-bottom'
import RightTop from './cpns/right-top'
import RightCenter from './cpns/right-center'
import RightBottom from './cpns/right-bottom'

const Home = memo(() => {
  return (
    <HomeStyle>
      <Header></Header>
      <LeftTop></LeftTop>
      <LeftBottom></LeftBottom>
      <CenterTop></CenterTop>
      <CenterBottom></CenterBottom>
      <RightTop></RightTop>
      <RightCenter></RightCenter>
      <RightBottom></RightBottom>
    </HomeStyle>
  )
})

export default Home
