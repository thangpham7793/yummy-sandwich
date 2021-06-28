import * as React from 'react'
import Svg, { Ellipse, Path } from 'react-native-svg'

const UserCircle = ({ width = 60, height = 60, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 60 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Ellipse
        cx={30}
        cy={23.134}
        rx={7.5}
        ry={6.94}
        fill="#FBF6ED"
        stroke="#424242"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Ellipse
        cx={30}
        cy={27.761}
        rx={22.5}
        ry={20.821}
        stroke="#424242"
        strokeWidth={2}
      />
      <Path
        d="M44.513 44.15a.749.749 0 00.36-.96c-.982-2.25-2.84-4.23-5.339-5.679-2.735-1.585-6.086-2.444-9.534-2.444-3.448 0-6.8.859-9.534 2.444-2.5 1.448-4.357 3.43-5.34 5.679a.749.749 0 00.361.96 31.693 31.693 0 0029.026 0z"
        fill="#FBF6ED"
        stroke="#424242"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default UserCircle
