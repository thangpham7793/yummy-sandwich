import React from 'react'

import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

export default ({ width, height, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="-9 0 80 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M.072 0h53.571v51H.072z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.0081 0 0 .00721 -.362 -.329)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={225}
          height={225}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}
