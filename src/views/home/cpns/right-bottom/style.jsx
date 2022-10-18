import styled from 'styled-components'

import bgRightBottom from '@/assets/images/bg_right_bottom.svg'

export const RightBottomStyle = styled.div`
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${bgRightBottom}) no-repeat 100% 100%;
  background-position: center center;

  .hy-cls-1,
  .hy-cls-2 {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 4px;
    fill-rule: evenodd;
  }

  .hy-cls-1 {
    opacity: 0.8;
    stroke: url(#hy-linear-gradient);
  }

  .hy-cls-2 {
    stroke: url(#hy-linear-gradient-2);
  }

  .hy-cls-3,
  .hy-cls-4 {
    fill: #f98800;
  }

  .hy-cls-3 {
    filter: url(#hy-filter);
  }

  .hy-cls-4 {
    filter: url(#hy-filter-2);
  }
`
