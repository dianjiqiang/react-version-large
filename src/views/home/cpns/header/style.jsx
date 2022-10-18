import styled from 'styled-components'

import bgHeader from '@/assets/images/bg_header.svg'

export const HeaderStyle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 21px;
  height: 56px;
  background: url(${bgHeader}) no-repeat 100% 100%;
  background-position: center center;
  .title {
    text-indent: -100vw;
  }
`
