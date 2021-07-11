import React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

export default ({ width, height, ...props }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="-4.5 0 68 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h68v53H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00444 0 0 .0057 0 -.142)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={200}
          height={200}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}
