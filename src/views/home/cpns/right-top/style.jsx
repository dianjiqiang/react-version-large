import styled from 'styled-components'
import bgRight from '@/assets/images/bg_right_top.svg'

export const RightTopStyle = styled.div`
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background: url(${bgRight}) 100% 100% no-repeat;
  background-position: center center;

  .right-top-panel {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }

  .right-water-ball {
    width: 269px;
    height: 199px;
    margin-top: 50px;
    margin-left: 40px;
  }

  .legend {
    flex: 1;
  }
  .leg-name {
    margin-top: 23px;
    margin-left: 40px;
  }
  .leg-name span {
    display: inline-block;
    font-size: 20px;
    margin-right: 11px;
  }
  .legend .dot {
    width: 17px;
    height: 17px;
    border-radius: 50%;
  }
  .legend .area1 {
    background-color: #209393;
  }
  .legend .area2 {
    background-color: #1a54a5;
  }
  .legend .area3 {
    background-color: #85caf0;
  }
  .legend .area4 {
    background-color: #f5b64a;
  }
  .legend .area5 {
    background-color: #ee792e;
  }
  .legend .name {
    color: white;
  }
  .legend .percentage {
    color: #0cd2ea;
  }
`
