import styled from 'styled-components'

export const WaterScheduleStyle = styled.div`
  .water-ball {
    position: relative;
  }
  .dn {
    display: none;
  }
  .box {
    width: 190px;
    height: 190px;
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    overflow: hidden;
  }
  .box .percent {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 40px;
  }
  .box .water {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    transform: translate(0, 100%);
    background: #00c6ff;
  }
  /* 波浪定位 */
  .box .water_wave {
    width: 200%;
    position: absolute;
    bottom: 100%;
  }

  /* ============波浪动画============ */
  .box .water_wave_back {
    right: 0;
    fill: #c7eeff;
    animation: wave-back 1.4s infinite linear;
  }
  .box .water_wave_front {
    left: 0;
    fill: #00c6ff;
    margin-bottom: -1px;
    animation: wave-front 0.7s infinite linear;
  }
  @keyframes wave-front {
    100% {
      transform: translateX(-50%);
    }
  }
  @keyframes wave-back {
    100% {
      transform: translateX(50%);
    }
  }
  /* ============波浪动画============ */
`
