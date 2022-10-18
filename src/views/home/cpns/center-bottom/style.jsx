import styled from 'styled-components'

import bgBottom from '@/assets/images/bg_bottom.svg'

export const CenterBottomStyle = styled.div`
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background: url(${bgBottom}) no-repeat 100% 100%;
  background-position: center center;
  .bottom-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* padding-top: 40px; */
  }

  .bottom-content .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;

    flex: 1;
    height: 100%;
    padding: 0 10px 0 35px;
    /* border: 1px solid red; */
  }

  .bottom .panel1 {
  }

  .bottom-content .pan-left {
    font-size: 16px;
    color: #ffffff;
    opacity: 0.8;
  }
  .bottom-content .pan-left .title {
    color: white;
  }
  .bottom-content .pan-left .number {
    font-size: 36px;
    font-weight: bold;
    color: #23aeff;
    line-height: 60px;
  }

  .bottom-content .pan-left .unit {
    font-size: 18px;
    color: #23aeff;
  }

  .bottom-content .pan-right {
    margin-top: 35px;
  }

  .bottom-content .panel1 .pan-right .up-triangle {
    display: inline-block;
    margin-bottom: 4px;
    width: 0;
    height: 0;
    border-bottom: 8px solid #c70013;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
  .bottom .panel1 .pan-right .percentage {
    color: #c70013;
  }
  .bottom .panel2 .pan-right .up-triangle {
    display: inline-block;
    margin-bottom: 4px;
    width: 0;
    height: 0;
    border-bottom: 8px solid #c70013;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
  .bottom-content .panel2 .pan-right .percentage {
    color: #c70013;
  }

  .bottom-content .panel3 .pan-right .down-triangle {
    display: inline-block;
    margin-bottom: 1px;
    width: 0;
    height: 0;
    border-top: 8px solid #37a73f;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
  .bottom-content .panel3 .pan-right .percentage {
    color: #37a73f;
  }
`
