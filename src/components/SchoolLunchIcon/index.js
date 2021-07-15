import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export default ({ width = 40, height = 40, stroke = '#fff', ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 50 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        transform="rotate(90.806 8.246 33.243) skewX(.034)"
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.729}
        d="M-.876.853h9.547v1.729H-.876z"
      />
      <Path
        transform="rotate(90.806 5.365 30.402) skewX(.034)"
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.729}
        d="M-.876.853h9.547v1.729H-.876z"
      />
      <Path
        transform="matrix(-.75034 .66105 -.67715 -.73584 46.888 10.876)"
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.708}
        d="M-1.219-.064H9.628v1.708H-1.219z"
      />
      <Path
        transform="matrix(.79445 .60732 -.62397 .78144 27.09 8.063)"
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.706}
        d="M.145 1.184H9.87V2.89H.145z"
      />
      <Path
        d="M42.243 2.05l2.43 2.458-1.981-.847-.192-.082h-1.924l1.667-1.53zM29.461 4.298L30.906 2.3l1.952 1.351-1.918-.102-.345-.018-.286.193-.848.574zM40.48 6.765c0 1.919-1.596 3.51-3.61 3.51s-3.61-1.591-3.61-3.51c0-1.918 1.596-3.51 3.61-3.51s3.61 1.592 3.61 3.51zM30.666 26.061l2.947-11.53h5.968l3.438 11.53H30.667z"
        fill="#424242"
        stroke={stroke}
        strokeWidth={2}
      />
      <Path
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.729}
        d="M14.686 32.963v-9.547h1.73v9.547z"
      />
      <Path
        transform="matrix(.79446 .60732 -.62398 .78144 2.897 8.052)"
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.706}
        d="M.145 1.184H9.87V2.89H.145z"
      />
      <Path
        d="M16.279 6.765c0 1.919-1.596 3.51-3.61 3.51s-3.61-1.591-3.61-3.51c0-1.918 1.596-3.51 3.61-3.51s3.61 1.592 3.61 3.51z"
        fill="#424242"
        stroke={stroke}
        strokeWidth={2}
      />
      <Path
        transform="rotate(90.806 -6.18 17.907) skewX(.034)"
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.729}
        d="M-.876.853h9.547v1.729H-.876z"
      />
      <Path
        transform="matrix(-.75034 .66105 -.67715 -.73584 22.46 11.173)"
        fill="#424242"
        stroke={stroke}
        strokeWidth={1.708}
        d="M-1.219-.064h9.705v1.708h-9.705z"
      />
      <Path
        fill="#424242"
        stroke={stroke}
        strokeWidth={2}
        d="M9.06 14.531h7.219v11.531H9.06z"
      />
    </Svg>
  )
}
