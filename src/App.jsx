import React, { memo, useEffect } from 'react'
import { AppStyle } from './style'
import { resetScale } from './utils/resetScale'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

const App = memo((props) => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      resetScale()
    })
  }, [])
  useEffect(resetScale, [])
  return <AppStyle>{useRoutes(routes)}</AppStyle>
})

export default App
