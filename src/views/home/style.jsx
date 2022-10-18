import styled from 'styled-components'

import bg from '@/assets/images/bg.png'

export const HomeStyle = styled.div`
  & {
    position: absolute;
    width: 100%;
    height: 100%;

    background: url(${bg}) no-repeat 100% 100%;
    background-position: center center;
  }
`
