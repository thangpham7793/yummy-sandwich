import * as React from 'react'

import Svg, { Rect } from 'react-native-svg'

export default ({ width = 40, height = 40, stroke, ...props }) => {
  return (
    <Svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={7.5}
        y={7.5}
        width={11.25}
        height={11.25}
        rx={1}
        fill="#424242"
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Rect
        x={7.5}
        y={26.25}
        width={11.25}
        height={11.25}
        rx={1}
        fill="#424242"
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Rect
        x={26.25}
        y={26.25}
        width={11.25}
        height={11.25}
        rx={1}
        fill="#424242"
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Rect
        x={26.25}
        y={7.5}
        width={11.25}
        height={11.25}
        rx={1}
        fill="#424242"
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  )
}
