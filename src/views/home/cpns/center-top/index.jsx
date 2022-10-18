import React, { memo, Fragment, useCallback, useEffect, useRef } from 'react'
import gsap from 'gsap'

import lingxA from '@/assets/images/ling/lingxA.png'
import lingxB from '@/assets/images/ling/lingxB.png'
import lingxC from '@/assets/images/ling/lingxC.png'
import lingxD from '@/assets/images/ling/lingxD.png'
import lingxE from '@/assets/images/ling/lingxE.png'
import lingxF from '@/assets/images/ling/lingxF.png'

import { CenterTopStyle } from './style'

const CenterTop = memo(() => {
  const startEnterAnimationRef = useRef()
  startEnterAnimationRef.current = useCallback(() => {
    // 中间 入场动画
    let timeline = gsap.timeline({})
    timeline
      .fromTo(
        '#dongxiao', // svg
        {
          duration: 1,
          scale: 0.8,
          y: 40 // 往下移动一点
        },
        {
          duration: 1,
          scale: 1,
          y: 0
        }
      )
      .fromTo(
        ['#center-house'], // 房子
        {
          duration: 1,
          opacity: 0.5,
          scale: 0.7,
          transformOrigin: 'bottom',
          y: 20 // 放下移
        },
        {
          duration: 1,
          opacity: 1,
          scale: 1,
          transformOrigin: 'bottom',
          y: 0
        },
        '-=1'
      )
  }, [])
  useEffect(() => {
    startEnterAnimationRef.current()
  }, [startEnterAnimationRef])
  return (
    <CenterTopStyle>
      <svg
        id="dongxiao"
        data-name="dongxiao"
        xmlns="http://www.w3.org/2000/svg"
        width="787.781"
        height="652"
        viewBox="0 0 787.781 652"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="177.891"
            y1="126.344"
            x2="177.891"
            y2="51.375"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#030000" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="177.891"
            y1="110.344"
            x2="177.891"
            y2="44.719"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-3"
            x1="177.969"
            y1="90.719"
            x2="177.969"
            y2="-0.625"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#26bbff" />
            <stop offset="1" stopColor="#26bbff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-4"
            x1="177.969"
            y1="91.219"
            x2="177.969"
            y2="46.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="-0.055" stopColor="#26bbff" />
            <stop offset="1.044" stopColor="#26bbff" stopOpacity="0" />
            <stop offset="1.055" stopColor="#26bbff" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-5"
            x1="178.109"
            y1="87.563"
            x2="178.109"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-6"
            x1="718.89"
            y1="414.344"
            x2="718.89"
            y2="339.375"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-7"
            x1="718.89"
            y1="398.344"
            x2="718.89"
            y2="332.719"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-8"
            x1="718.969"
            y1="378.719"
            x2="718.969"
            y2="287.375"
            href="#linear-gradient-3"
          />
          <linearGradient
            id="linear-gradient-9"
            x1="718.968"
            y1="379.219"
            x2="718.968"
            y2="334.875"
            href="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-10"
            x1="719.109"
            y1="375.562"
            x2="719.109"
            y2="326"
            href="#linear-gradient-5"
          />
          <linearGradient
            id="linear-gradient-11"
            x1="67.891"
            y1="325.344"
            x2="67.891"
            y2="250.375"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-12"
            x1="67.891"
            y1="309.344"
            x2="67.891"
            y2="243.719"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-13"
            x1="67.969"
            y1="289.719"
            x2="67.969"
            y2="198.375"
            href="#linear-gradient-3"
          />
          <linearGradient
            id="linear-gradient-14"
            x1="67.969"
            y1="290.219"
            x2="67.969"
            y2="245.875"
            href="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-15"
            x1="68.109"
            y1="286.562"
            x2="68.109"
            y2="237"
            href="#linear-gradient-5"
          />
          <linearGradient
            id="linear-gradient-16"
            x1="159.891"
            y1="596.344"
            x2="159.891"
            y2="521.375"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-17"
            x1="159.891"
            y1="580.344"
            x2="159.891"
            y2="514.719"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-18"
            x1="159.969"
            y1="560.719"
            x2="159.969"
            y2="469.375"
            href="#linear-gradient-3"
          />
          <linearGradient
            id="linear-gradient-19"
            x1="159.969"
            y1="561.219"
            x2="159.969"
            y2="516.875"
            href="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-20"
            x1="160.109"
            y1="557.562"
            x2="160.109"
            y2="508"
            href="#linear-gradient-5"
          />
          <linearGradient
            id="linear-gradient-21"
            x1="581.89"
            y1="623.344"
            x2="581.89"
            y2="548.375"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-22"
            x1="581.89"
            y1="607.344"
            x2="581.89"
            y2="541.719"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-23"
            x1="581.969"
            y1="587.719"
            x2="581.969"
            y2="496.375"
            href="#linear-gradient-3"
          />
          <linearGradient
            id="linear-gradient-24"
            x1="581.968"
            y1="588.219"
            x2="581.968"
            y2="543.875"
            href="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-25"
            x1="582.109"
            y1="584.562"
            x2="582.109"
            y2="535"
            href="#linear-gradient-5"
          />
          <linearGradient
            id="linear-gradient-26"
            x1="633.89"
            y1="145.344"
            x2="633.89"
            y2="70.375"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-27"
            x1="633.89"
            y1="129.344"
            x2="633.89"
            y2="63.719"
            href="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-28"
            x1="633.969"
            y1="109.719"
            x2="633.969"
            y2="18.375"
            href="#linear-gradient-3"
          />
          <linearGradient
            id="linear-gradient-29"
            x1="633.968"
            y1="110.219"
            x2="633.968"
            y2="65.875"
            href="#linear-gradient-4"
          />
          <linearGradient
            id="linear-gradient-30"
            x1="634.109"
            y1="106.562"
            x2="634.109"
            y2="57"
            href="#linear-gradient-5"
          />
          <linearGradient
            id="linear-gradient-31"
            x1="273.219"
            y1="315.25"
            x2="524.25"
            y2="443.156"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fbab00" />
            <stop offset="0.342" stopColor="#f98100" />
            <stop offset="0.75" stopColor="#f86d00" stopOpacity="0" />
            <stop offset="1" stopColor="#f86000" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-32"
            x1="565.875"
            y1="379.485"
            x2="235.062"
            y2="379.485"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1b90ff" />
            <stop offset="0.745" stopColor="#0752ff" stopOpacity="0" />
            <stop offset="1" stopColor="#003dff" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-33"
            x1="628.344"
            y1="445.411"
            x2="169.406"
            y2="278.371"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fbab00" />
            <stop offset="0.342" stopColor="#f98100" />
            <stop offset="1" stopColor="#f86000" stopOpacity="0" />
          </linearGradient>
          <filter id="filter" x="291" y="214" width="61" height="60" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter id="filter-2" x="258" y="155" width="61" height="61" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>

          {/* 添加小白点和小黄点的模糊样式（拷贝前一个的）*/}

          <filter id="blue-filter-2" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>

          <filter id="orange-filter-2" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#f97a00" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          {/* 添加小白点和小黄点的模糊样式  */}

          <filter id="filter-3" x="126" y="296" width="61" height="61" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter id="filter-4" x="255" y="269" width="61" height="61" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter id="filter-5" x="226" y="510" width="60" height="61" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter id="filter-6" x="256" y="452" width="60" height="60" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter id="filter-7" x="257" y="407" width="61" height="61" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter id="filter-8" x="247" y="83" width="59" height="59" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter id="filter-9" x="262" y="122" width="60" height="59" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter
            id="filter-10"
            x="278"
            y="199"
            width="59"
            height="60"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter
            id="filter-11"
            x="112"
            y="294"
            width="59"
            height="59"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter
            id="filter-12"
            x="206"
            y="274"
            width="59"
            height="59"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter
            id="filter-13"
            x="255"
            y="436"
            width="59"
            height="60"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter
            id="filter-14"
            x="238"
            y="500"
            width="59"
            height="59"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <filter
            id="filter-15"
            x="279"
            y="364"
            width="59"
            height="59"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur result="blur" stdDeviation="6.667" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" floodColor="#1783ff" floodOpacity="0.9" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
          </filter>
          <image
            id="image"
            width="23"
            height="23"
            href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAC1ElEQVRIiXWV227TQBCGv9k4rtM2QCtBy/EKIRBXiFvEPW/Dy8ETIHED1xRRoQp6oNCmbeKkiWN7kZ3ZMizB0mp9WH/77+w/s+JfP2PJJdrCZZ/9kt4vgyTRcwNwBuai5k2r+bev/we3oI5+62qfRMoroATm5j5cdQy3KhtgCqwAmfapTigGNgOm2jetiCeI4YnCesAa0Ne+p5MGeAObACMgN6GcmdX5JFKdqtoGuqHtxuLZryzGSqngCx0bGDbuEuBBeVC9rsBbwHbb+3oD71cXAmSGyAiRE0DftcDKhOwqLHFImjBsAlvAA7x/gLhtOsk6zjmqckZdDoDvIIluamFin4QNjpVnqvw63t9EuE/Sfcjm3U1uP+yQZnC67/nxdYPLUQq+BMk17rmG6zJYOcCdsZ5O4DfAbbfg568SnrxIyNaE/Z2Sj2967H7YYjYZIByDrOqqE+Oqq7CI8XcXfNbGuNvtc+dRh6cvE+49Xrilv+kY/iw43M2Yjvutk0TSGBwUxyku+Kb3Duk4sjXo9f98y1aF1WtC0nUGJlGJuIL7KI0rpLGbzKnmc86O4OdexbxY2Oz0sOJ4r2aaq99bawanLE3/AA87f4m4UeuKwy83+PC2x/BkRrYuHHyu2XlfMxkOETlDZKwumVsbxvBSwYvMEzkFf8B4kPHp3RYHOylJKuRnFflgRFV+Q9wxcK5OmSqjClUyMWGZ64BGydki5SWl9iWTiwHj82sgDvwUkQHifgBHwIlm66WKq2z6h0ITilGuluy0g0QmeH41W6kZWiAuVwEn2oa64mKZ8pC+hSoPG120P4qsg3T1fakqR6r4Qu+nuvrawu2GFsZOdrIVkxPhfQjh2JTe0p5MNiwBOotWkmu1DGW1Nps/Mw4rjR3/ghN5NLgnFKIm/iHhwiqtvy306jy18HB8hZ8blUHhsgM6iLHQvw7q+IC2P8Wn/9IT/r/vgd/SEURZ4bZ56gAAAABJRU5ErkJggg=="
          />
          <image
            id="image-2"
            width="15"
            height="15"
            href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAABwklEQVQokVWTwW7TQBCGv911nJCW1qkKFU0RBw4ovdFz34IX4cgDIB4G8QrcOVUI9RRR2kglAkqVNg0QN95dNPZsMSuNvPbMP//MP2MTXz5Hj22Z07sBIuDVgpp8I1Og03sO9NQ6CpbgEvijz1VKlPGPSQD3gUKtrz4JXgAz4Ar4pUliptmFcR14CAwh7uL9FjF0sO431l0A50oS28yJtWiAjPDVPiHsYUyOr+YYc4KxEuOVtS4/ld1twPER3o/obx4wOizYfmwYf6iYHG8SQom1My3/WnAJnNc9ej8g+D32Dwe8eOVYKwxPDyzv3uww/bxL3tvAmCRmDUT7tk2PNufBE1grGiGHz2B9yxGqnmqURlhfoo6jwrolISz4chSYHHuWi4pP7+Hy/JYsvwFT1nFNfD3bqAIssO4ncMrJ0YC3r3fY2LZMxyXzizOyfIIxM533Ko1KFFyqEF+xro+vVpx+HBJDF5ddk3XPasXhBzAHbhM4bZAoOK3frbui0xtDdBhbYswl8A34rgtzxyxgeZHNkSNZZ1h7r7Vh4hPGGy277jv1nIbfriLttvgkQdrr/wSTk/4UCRTmu3G0/CmmBgL8BRqss25U0OPnAAAAAElFTkSuQmCC"
          />
        </defs>
        <g>
          <g id="icon">
            <path
              id="base_o"
              className="cls-1"
              d="M177.9,51.386c33.127,0,63.736,13.839,67.114,34,3.557,21.237-26.042,40.948-67.114,40.948s-70.671-19.711-67.113-40.948C114.162,65.225,144.771,51.386,177.9,51.386Z"
            />
            <path
              id="base_t"
              className="cls-2"
              d="M177.9,44.728c33.127,0,63.736,12.114,67.114,29.76,3.557,18.59-26.042,35.844-67.114,35.844s-70.671-17.254-67.113-35.844C114.162,56.842,144.771,44.728,177.9,44.728Z"
            />
            <path id="right_o" className="cls-3" d="M122.484-.626H233.455L208.447,90.7H147.491Z" />
            <path
              id="right_t"
              className="cls-4"
              d="M112.064,46.866H243.875l-35.428,44.36H147.491Z"
            />
            <path
              id="line"
              className="cls-5"
              d="M178.105,38c25.911,0,51.58,8.076,56.087,21.076,4.881,14.075-19.143,28.5-56.083,28.5s-60.966-14.426-56.087-28.5C126.527,46.072,152.194,38,178.105,38Z"
            />
            <image
              id="icon_star_guangzhou"
              x="121"
              y="-3"
              width="112"
              height="112"
              href={require('@/assets/images/center/star.png')}
            />
            <path
              id="base_o-2"
              data-name="base_o"
              className="cls-6"
              d="M718.9,339.386c33.127,0,63.736,13.839,67.114,34,3.557,21.237-26.042,40.948-67.114,40.948s-70.671-19.711-67.113-40.948C655.162,353.225,685.771,339.386,718.9,339.386Z"
            />
            <path
              id="base_t-2"
              data-name="base_t"
              className="cls-7"
              d="M718.9,332.728c33.127,0,63.736,12.114,67.114,29.76,3.557,18.59-26.042,35.844-67.114,35.844s-70.671-17.254-67.113-35.844C655.162,344.842,685.771,332.728,718.9,332.728Z"
            />
            <path
              id="right_o-2"
              data-name="right_o"
              className="cls-8"
              d="M663.484,287.374H774.455L749.447,378.7H688.491Z"
            />
            <path
              id="right_t-2"
              data-name="right_t"
              className="cls-9"
              d="M653.064,334.866H784.875l-35.428,44.36H688.491Z"
            />
            <path
              id="line-2"
              data-name="line"
              className="cls-10"
              d="M719.105,326c25.911,0,51.58,8.076,56.087,21.076,4.881,14.075-19.143,28.5-56.083,28.5s-60.966-14.426-56.087-28.5C667.527,334.072,693.194,326,719.105,326Z"
            />
            <image
              id="icon_location_zhongshan"
              x="666"
              y="287"
              width="106"
              height="107"
              href={require('@/assets/images/center/location.png')}
            />
            <path
              id="base_o-3"
              data-name="base_o"
              className="cls-11"
              d="M67.9,250.386c33.127,0,63.736,13.839,67.114,34,3.557,21.237-26.042,40.948-67.114,40.948S-2.773,305.62.785,284.383C4.162,264.225,34.771,250.386,67.9,250.386Z"
            />
            <path
              id="base_t-3"
              data-name="base_t"
              className="cls-12"
              d="M67.9,243.728c33.127,0,63.736,12.114,67.114,29.76,3.557,18.59-26.042,35.844-67.114,35.844S-2.773,292.078.785,273.488C4.162,255.842,34.771,243.728,67.9,243.728Z"
            />
            <path
              id="right_o-3"
              data-name="right_o"
              className="cls-13"
              d="M12.484,198.374H123.455L98.447,289.7H37.491Z"
            />
            <path
              id="right_t-3"
              data-name="right_t"
              className="cls-14"
              d="M2.064,245.866H133.875l-35.428,44.36H37.491Z"
            />
            <path
              id="line-3"
              data-name="line"
              className="cls-15"
              d="M68.105,237c25.911,0,51.58,8.076,56.087,21.076,4.881,14.075-19.143,28.5-56.083,28.5s-60.966-14.426-56.088-28.5C16.527,245.072,42.194,237,68.105,237Z"
            />
            <image
              id="icon_pie_shenzhen"
              x="13"
              y="194"
              width="107"
              height="108"
              href={require('@/assets/images/center/pie.png')}
            />
            <path
              id="base_o-4"
              data-name="base_o"
              className="cls-16"
              d="M159.9,521.386c33.127,0,63.736,13.839,67.114,34,3.557,21.237-26.042,40.948-67.114,40.948S89.227,576.62,92.785,555.383C96.162,535.225,126.771,521.386,159.9,521.386Z"
            />
            <path
              id="base_t-4"
              data-name="base_t"
              className="cls-17"
              d="M159.9,514.728c33.127,0,63.736,12.114,67.114,29.76,3.557,18.59-26.042,35.844-67.114,35.844s-70.671-17.254-67.113-35.844C96.162,526.842,126.771,514.728,159.9,514.728Z"
            />
            <path
              id="right_o-4"
              data-name="right_o"
              className="cls-18"
              d="M104.484,469.374H215.455L190.447,560.7H129.491Z"
            />
            <path
              id="right_t-4"
              data-name="right_t"
              className="cls-19"
              d="M94.064,516.866H225.875l-35.428,44.36H129.491Z"
            />
            <path
              id="line-4"
              data-name="line"
              className="cls-20"
              d="M160.1,508c25.911,0,51.58,8.076,56.087,21.076,4.881,14.075-19.143,28.5-56.083,28.5s-60.966-14.426-56.088-28.5C108.527,516.072,134.194,508,160.1,508Z"
            />
            <image
              id="icon_earth_dongguan"
              x="106"
              y="460"
              width="111"
              height="112"
              href={require('@/assets/images/center/earth.png')}
            />
            <path
              id="base_o-5"
              data-name="base_o"
              className="cls-21"
              d="M581.9,548.386c33.127,0,63.736,13.839,67.114,34,3.557,21.237-26.042,40.948-67.114,40.948s-70.671-19.711-67.113-40.948C518.162,562.225,548.771,548.386,581.9,548.386Z"
            />
            <path
              id="base_t-5"
              data-name="base_t"
              className="cls-22"
              d="M581.9,541.728c33.127,0,63.736,12.114,67.114,29.76,3.557,18.59-26.042,35.844-67.114,35.844s-70.671-17.254-67.113-35.844C518.162,553.842,548.771,541.728,581.9,541.728Z"
            />
            <path
              id="right_o-5"
              data-name="right_o"
              className="cls-23"
              d="M526.484,496.374H637.455L612.447,587.7H551.491Z"
            />
            <path
              id="right_t-5"
              data-name="right_t"
              className="cls-24"
              d="M516.064,543.866H647.875l-35.428,44.36H551.491Z"
            />
            <path
              id="line-5"
              data-name="line"
              className="cls-25"
              d="M582.105,535c25.911,0,51.58,8.076,56.087,21.076,4.881,14.075-19.143,28.5-56.083,28.5s-60.966-14.426-56.087-28.5C530.527,543.072,556.194,535,582.105,535Z"
            />
            <image
              id="icon_hot_zhuhai"
              x="530"
              y="495"
              width="105"
              height="105"
              href={require('@/assets/images/center/hot.png')}
            />
            <path
              id="base_o-6"
              data-name="base_o"
              className="cls-26"
              d="M633.9,70.386c33.127,0,63.737,13.839,67.114,34,3.557,21.237-26.042,40.948-67.114,40.948s-70.671-19.711-67.113-40.948C570.162,84.225,600.771,70.386,633.9,70.386Z"
            />
            <path
              id="base_t-6"
              data-name="base_t"
              className="cls-27"
              d="M633.9,63.728c33.127,0,63.737,12.114,67.114,29.76,3.557,18.59-26.042,35.844-67.114,35.844s-70.671-17.254-67.113-35.844C570.162,75.842,600.771,63.728,633.9,63.728Z"
            />
            <path
              id="right_o-6"
              data-name="right_o"
              className="cls-28"
              d="M578.484,18.374H689.455L664.447,109.7H603.491Z"
            />
            <path
              id="right_t-6"
              data-name="right_t"
              className="cls-29"
              d="M568.064,65.866H699.875l-35.428,44.36H603.491Z"
            />
            <path
              id="line-6"
              data-name="line"
              className="cls-30"
              d="M634.105,57c25.911,0,51.58,8.076,56.087,21.076,4.881,14.075-19.143,28.5-56.083,28.5s-60.966-14.426-56.087-28.5C582.527,65.072,608.194,57,634.105,57Z"
            />
            <image
              id="icon_home_foshan"
              x="582"
              y="17"
              width="103"
              height="103"
              href={require('@/assets/images/center/home.png')}
            />
          </g>
          <g id="circle">
            <path
              id="white"
              className="cls-31"
              d="M414.057,225.629c96.638,0,183.089,41.729,194.7,100.322C621.763,391.613,533.734,450,417.167,450c-116.623,0-206.208-58.413-195.026-124.044C232.116,267.4,317.339,225.629,414.057,225.629Z"
            />
            <path
              id="orange_2"
              className="cls-32"
              d="M397.666,306.9c63.817,0,120.7,28.166,126.181,67.065,5.811,41.258-50.026,77.528-124.026,77.528-74.041,0-130.915-36.294-126.336-77.528C277.8,335.086,333.819,306.9,397.666,306.9Z"
            />
            <path
              id="blue"
              className="cls-33"
              d="M399.082,284.02c82.745,0,156.818,36,165.9,86.375,10,55.486-64.543,104.544-163.1,104.544-98.607,0-174.539-49.087-166.169-104.544C243.317,320.056,316.275,284.02,399.082,284.02Z"
            />
            <path
              id="orange_1"
              className="cls-34"
              d="M396.909,228.952c111.911,0,212.629,47.606,229.169,115.472,19.27,79.068-85.494,150.425-225.217,150.425-139.785,0-246.6-71.391-229.688-150.425C185.681,276.624,284.878,228.952,396.909,228.952Z"
            />
            <image
              id="light_o_3"
              x="520"
              y="324"
              width="72"
              height="92"
              href={require('@/assets/images/center/light_0_3.png')}
            />
            <image
              id="light_o_2"
              x="141"
              y="261"
              width="99"
              height="137"
              href={require('@/assets/images/center/light_0_2.png')}
            />
            <image
              id="light_o_1"
              x="436"
              y="385"
              width="99"
              height="66"
              href={require('@/assets/images/center/light_0_1.png')}
            />
          </g>
          <image
            id="center-house"
            x="103"
            y="120"
            width="539"
            height="419"
            href={require('@/assets/images/center/house.png')}
          />
          <g id="right">
            <g id="组_380" data-name="组 380">
              <path
                id="line_b_3"
                className="cls-35"
                d="M254.251,93.032s47.68,24.959,35.63,74.5,43.548,85.6,43.548,85.6"
              />
              <path
                id="line_b_2"
                className="cls-35"
                d="M122.023,310.584s19.568,33.927,95.014-1.189,85.512,3.963,85.512,3.963"
              />
              <path
                id="line_b_1"
                className="cls-35"
                d="M236.832,551.912s54.438-25.6,47.506-82.424,34.839-88.368,34.839-88.368"
              />
              <path
                id="line_o_3"
                className="cls-36"
                d="M558.295,108.09s-49.1,12.55-54.633,70.932-39.193,77.669-39.193,77.669"
              />

              <path
                id="line_o_2"
                className="cls-36"
                d="M653,387s-39.424,20.259-79-30-70.444-42.177-79-40"
              />
              <path
                id="line_o_1"
                className="cls-36"
                d="M505,579s-31.47-27.546-17-86c12.415-50.151-42-83-42-83"
              />

              <g id="dots_b">
                <circle id="dots39" className="cls-37" cx="256.219" cy="94.234" r="2.781" />
                <path
                  id="dots38"
                  className="cls-38"
                  d="M331.062,248.777a2.766,2.766,0,1,1-2.765,2.766A2.766,2.766,0,0,1,331.062,248.777Z"
                />
                <path
                  id="dots37"
                  className="cls-38"
                  d="M120.828,306.621a2.781,2.781,0,1,1-2.781,2.781A2.781,2.781,0,0,1,120.828,306.621Z"
                />
                <circle id="dots36" className="cls-39" cx="300.938" cy="311.781" r="2.781" />
                <circle id="dots35" className="cls-37" cx="236.422" cy="552.313" r="2.766" />
                <path
                  id="dots34"
                  className="cls-38"
                  d="M318.391,380.34a2.766,2.766,0,1,1-2.782,2.765A2.773,2.773,0,0,1,318.391,380.34Z"
                />
                <image
                  id="dots28"
                  x="255"
                  y="91"
                  width="22"
                  height="23"
                  href={require('@/assets/images/center/dots28.png')}
                />
                <circle id="dots27" className="cls-40" cx="321.25" cy="243.625" r="2.375" />
                <circle id="dots26" className="cls-41" cx="288" cy="184.969" r="2.375" />
                <circle id="dots25" className="cls-42" cx="155.766" cy="326.047" r="2.359" />
                <circle id="dots24" className="cls-43" cx="284.828" cy="298.703" r="2.359" />
                <path
                  id="dots23"
                  className="cls-44"
                  d="M255.547,537.652a2.375,2.375,0,1,1-2.375,2.375A2.375,2.375,0,0,1,255.547,537.652Z"
                />
                <path
                  id="dots22"
                  className="cls-45"
                  d="M285.641,479a2.375,2.375,0,1,1-2.375,2.375A2.375,2.375,0,0,1,285.641,479Z"
                />
                <circle id="dots21" className="cls-46" cx="286.813" cy="436.985" r="2.375" />
                <circle id="dots20" className="cls-47" cx="276.125" cy="112.078" r="1.594" />
                <path
                  id="dots19"
                  className="cls-48"
                  d="M291.578,149.308a1.579,1.579,0,1,1-1.594,1.578A1.587,1.587,0,0,1,291.578,149.308Z"
                />
                <path
                  id="dots18"
                  className="cls-49"
                  d="M306.625,226.965a1.594,1.594,0,1,1-1.578,1.593A1.585,1.585,0,0,1,306.625,226.965Z"
                />
                <circle id="dots17" className="cls-50" cx="140.734" cy="323.266" r="1.578" />
                <circle id="dots16" className="cls-51" cx="234.938" cy="302.672" r="1.594" />
                <circle id="dots15" className="cls-52" cx="284.422" cy="465.516" r="1.578" />
                <circle id="dots14" className="cls-53" cx="266.625" cy="528.938" r="1.594" />
                <circle id="dots13" className="cls-54" cx="307.797" cy="393.016" r="1.578" />
              </g>
              <g id="dots_o">
                <path
                  id="dots33"
                  className="cls-55"
                  d="M555.906,103.715a2.766,2.766,0,1,1-2.765,2.765A2.765,2.765,0,0,1,555.906,103.715Z"
                />
                <path
                  id="dots32"
                  className="cls-55"
                  d="M466.437,252.34a2.766,2.766,0,1,1-2.765,2.765A2.765,2.765,0,0,1,466.437,252.34Z"
                />
                <circle id="dots31" className="cls-56" cx="652.093" cy="385.89" r="2.781" />
                <path
                  id="dots30"
                  className="cls-55"
                  d="M494.937,312.558a2.766,2.766,0,1,1-2.765,2.766A2.766,2.766,0,0,1,494.937,312.558Z"
                />
                <circle id="dots29" className="cls-56" cx="505.625" cy="576.485" r="2.781" />
                <circle
                  id="dots29-2"
                  data-name="dots29"
                  className="cls-56"
                  cx="446.25"
                  cy="409.64"
                  r="2.781"
                />
                <use id="dots12" x="516" y="118" href="#image" />
                <use id="dots11" x="505" y="304" href="#image" />
                <use id="dots10" x="572" y="353" href="#image" />
                <use id="dots09" x="486" y="555" href="#image" />
                <use id="dots08" x="479" y="465" href="#image" />
                <use id="dots07" x="499" y="158" href="#image-2" />
                <use id="dots06" x="483" y="221" href="#image-2" />
                <use id="dots05" x="470" y="239" href="#image-2" />
                <use id="dots04" x="632" y="383" href="#image-2" />
                <use id="dots03" x="564" y="346" href="#image-2" />
                <use id="dots02" x="455" y="415" href="#image-2" />
                <use id="dots01" x="482" y="455" href="#image-2" />
              </g>

              {/* 蓝色点 */}
              {[1, 2, 3].map((item, index) => {
                return (
                  <Fragment key={index}>
                    <circle className="cus-cls-blue" cx="0" cy="0" r="3">
                      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                        <mpath href={`#line_b_${item}`} />
                      </animateMotion>
                    </circle>

                    <circle className="cus-cls-blue" cx="0" cy="0" r="3">
                      <animateMotion begin="-3s" dur="6s" repeatCount="indefinite" rotate="auto">
                        <mpath href={`#line_b_${item}`} />
                      </animateMotion>
                    </circle>
                  </Fragment>
                )
              })}

              {/* 橙色 */}
              {[1, 2, 3].map((item, index) => (
                <Fragment key={index}>
                  <circle className="cus-cls-orange" cx="0" cy="0" r="3">
                    <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                      <mpath href={`#line_o_${item}`} />
                    </animateMotion>
                  </circle>
                  <circle className="cus-cls-orange" cx="0" cy="0" r="3">
                    <animateMotion begin="-3s" dur="6s" repeatCount="indefinite" rotate="auto">
                      <mpath href={`#line_o_${item}`} />
                    </animateMotion>
                  </circle>
                </Fragment>
              ))}
            </g>
          </g>
          <g id="text">
            <text
              id="text6"
              className="cls-57"
              transform="translate(179.049 154.026) scale(0.481 0.481)"
            >
              广州
            </text>
            <text
              id="text5"
              className="cls-57"
              transform="translate(63.771 351.7) scale(0.481 0.481)"
            >
              深圳
            </text>
            <text
              id="text4"
              className="cls-57"
              transform="translate(161.75 622.618) scale(0.481 0.481)"
            >
              东莞
            </text>
            <text
              id="text3"
              className="cls-57"
              transform="translate(583.87 649.734) scale(0.481 0.481)"
            >
              珠海
            </text>
            <text
              id="text2"
              className="cls-57"
              transform="translate(719.835 441.012) scale(0.481 0.481)"
            >
              中山
            </text>
            <text
              id="text1"
              className="cls-57"
              transform="translate(637.843 173.315) scale(0.481 0.481)"
            >
              佛山
            </text>
          </g>
        </g>
      </svg>
      {/* 烟花特效 */}
      <img className="lingxA" src={lingxA} alt="" />
      <img className="lingxB" src={lingxB} alt="" />
      <img className="lingxC" src={lingxC} alt="" />
      <img className="lingxD" src={lingxD} alt="" />
      <img className="lingxE" src={lingxE} alt="" />
      <img className="lingxF" src={lingxF} alt="" />
    </CenterTopStyle>
  )
})

export default CenterTop
